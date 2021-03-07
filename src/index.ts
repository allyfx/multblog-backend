import 'dotenv/config';

import mongoose from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import 'express-async-errors';
import routes from './routes';

import AppError from 'shared/errors/AppError';

import mongoConfig from 'config/mongo';

const app = express();

/**
 * Database connection
 */
mongoose.connect(mongoConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
      return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
      });
  }

  console.error(err);

  return response.status(500).json({
      status: 'error',
      message: 'Internal status error',
  });
});

app.listen(3333, () => {
  console.log('Server is on!');
});