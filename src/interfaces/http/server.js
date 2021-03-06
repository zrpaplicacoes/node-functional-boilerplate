const express = require('express')();

module.exports = ({
  config,
  rootRouter,
  logger,
}) => {
  const {
    express: {
      port,
    },
  } = config;

  return {
    start: () => express
      .use(rootRouter)
      .listen(port, () => logger.info(`[PID ${process.pid}] Listening at port ${port}`).run()),
  };
};
