import express from 'express';
import bodyParser from 'body-parser';

import { router as apiRouter } from 'routes/api';
import { DB } from './database';

const PORT = 3001 || process.env.PORT;

const app: express.Application = express();

DB.getInstance().run();

app.use(bodyParser.json());
app.use('/api/rectangles', apiRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
