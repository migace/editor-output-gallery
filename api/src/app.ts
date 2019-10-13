const express = require('express');
const db = require('./database');

const PORT = 3001 || process.env.PORT;

const app: express.Application = express();

db.run();

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
