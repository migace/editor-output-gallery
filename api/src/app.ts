import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { resolve } from "path"
import { config } from "dotenv"

import { router as rectanglesRouter } from 'routes/rectangles';
import { DB } from './database';

if (process.env.NODE_ENV !== 'production') {mongoose.set('debug', true)
  config({ path: resolve(__dirname, '../env') });
}

const PORT = 3001 || process.env.PORT;

const app: express.Application = express();

mongoose.set('debug', process.env.DB_DEBUG);
DB.getInstance().run();

app.use(bodyParser.json());
app.use('/api/rectangles', rectanglesRouter);

app.get('/', (_req, res) => {
  res.send('Hello World');
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

export default app;
