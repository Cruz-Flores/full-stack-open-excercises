const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const blogsRouter = require('./controllers/blogs.js');
const usersRouter = require('./controllers/users');
const middleware = require('./utils/middleware.js');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

logger.info('connecting to ', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then((result) => {
    logger.info('connect to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/blogs', blogsRouter);
app.use('/api/users', usersRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
