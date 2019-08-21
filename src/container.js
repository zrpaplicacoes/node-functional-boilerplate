const {
  createContainer, asFunction, asValue,
} = require('awilix');

// Configuration imports
const config = require('../config');

// Interfaces layer imports
const {
  healthCheckHandler,
} = require('./interfaces/http/handlers');
const {
  corsMiddleware,
  httpOptionsMiddleware,
  loggerMiddleware,
} = require('./interfaces/http/middleware');
const {
  rootRouter,
  v1Router,
} = require('./interfaces/http/routers');
const context = require('./interfaces/http/graphQL/context');
const server = require('./interfaces/http/server');
const resolvers = require('./interfaces/http/graphQL/resolvers');
const typeDefs = require('./interfaces/http/graphQL/typeDefs');

// Application layer imports
const application = require('./app/application');

// Domain layer imports
/*
 * Imports here
 */

// Infra layer imports
/*
 * Imports here
 */

// const errorHandler = require('./interfaces/http/errors/errorHandler');
// const devErrorHandler = require('./interfaces/http/errors/devErrorHandler');
// const swaggerMiddleware = require('./interfaces/http/swagger/swaggerMiddleware');

// const { logger } = require('./infra/logging/logger');

module.exports = createContainer()
  // Configuration registration
  .register({
    config: asValue(config),
  })
  // Interfaces layer registrations
  .register({
    context: asFunction(context).singleton(),
    resolvers: asFunction(resolvers).singleton(),
    typeDefs: asFunction(typeDefs).singleton(),
    healthCheckHandler: asFunction(healthCheckHandler).singleton(),
    corsMiddleware: asFunction(corsMiddleware).singleton(),
    httpOptionsMiddleware: asFunction(httpOptionsMiddleware).singleton(),
    loggerMiddleware: asFunction(loggerMiddleware).singleton(),
    server: asFunction(server).singleton(),
    rootRouter: asFunction(rootRouter).singleton(),
    v1Router: asFunction(v1Router).singleton(),
  })
  // Application layer registrations
  .register({
    app: asFunction(application).singleton(),
  })
  // Domain layer registrations
  .register({

  })
  // Infra layer registrations
  .register({
    logger: asValue(console),
  });
