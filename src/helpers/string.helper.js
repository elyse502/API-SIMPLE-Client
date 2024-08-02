/**
 * Uppercase the first letter of a string.
 * @param {string} message
 * @returns {string}
 */
export const firstUpperCase = (message) => 
    message[0].toUpperCase() + message.substring(1);