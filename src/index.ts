import 'dotenv/config';

import mongoose from 'mongoose';
import express from 'express';
import routes from './routes';

import mongoConfig from 'config/mongo';

const app = express();

/**
 * Database connection
 */
mongoose.connect(mongoConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server is on!');
});