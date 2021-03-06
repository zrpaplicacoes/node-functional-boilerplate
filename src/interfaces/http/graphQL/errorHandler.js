/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-unused-expression */
module.exports = ({ logger }) => ({ error }) => {
  logger.error(error).run();
  const newError = Error(error.message);
  newError.details = error.details;
  return newError;
};
