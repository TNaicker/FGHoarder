const express = require('express');
const app = express();
const knex = require('./db');

const PORT = 8000;

app.use((req, res) => {
  res.sendStatus(418);
})
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
