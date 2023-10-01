/**
 * Catch async errors
 * @param {*} fn
 * @returns {function}
 */
export const catchAsync = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};
