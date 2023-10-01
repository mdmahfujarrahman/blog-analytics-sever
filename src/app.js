import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/globalErrorHandler.js";
import routes from "./app/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * @description Attach API routes to the Express app.
 * @param {object} routes - An object containing the API routes.
 */
app.use("/api", routes);

/**
 * @description Global error handler middleware.
 * @param {Error} err - The error object.
 */
app.use(globalErrorHandler);

/**
 * @description 404 error handler middleware.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next function.
 */
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "API endpoint doesn't exist",
        errorMessages: [
            {
                path: "",
                message: "API endpoint doesn't exist",
            },
        ],
    });
});

export default app;
