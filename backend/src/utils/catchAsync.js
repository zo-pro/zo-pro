/**
 * Wrapper function to catch errors in async functions and pass them to the error middleware
 * @param {Function} fn - Async function to wrap
 * @returns {Function} Express middleware function
 */
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}; 