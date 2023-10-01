/**
 * @class ApiErros
 * @param {number} statusCode
 * @param {string} message
 * @param {Array} stack
 * @returns {Object} Error
 */
class ApiErros extends Error {
    statusCode;
    constructor(statusCode, message, stack) {
        super(message);
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiErros;
