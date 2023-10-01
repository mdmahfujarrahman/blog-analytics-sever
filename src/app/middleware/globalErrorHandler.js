import config from "../config/index.js";

/**
 * @description Global error handler
 * @param {*} err  Error object
 * @param {*} req  Request object
 * @param {*} res Response object
 * @param {*} next Next function
 * @returns {json} json response
 */

const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";
    let errorMessages = [];
    if (
        err?.response?.data?.error ===
        "invalid x-hasura-admin-secret/x-hasura-access-key"
    ) {
        statusCode = 401;
        message = "Invalid x-hasura-access-key";
        errorMessages = [
            {
                path: err?.response?.data?.path,
                message: "Invalid x-hasura-access-key",
            },
        ];
    } else if (err instanceof Error) {
        message = err.message;
        errorMessages = err.message
            ? [
                  {
                      path: "",
                      message: err.message,
                  },
              ]
            : [];
    }

    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config.env === "development" ? err.stack : null,
    });
};

export default globalErrorHandler;
