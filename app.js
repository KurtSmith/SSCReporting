var express = require('express');
var cors =  require('cors');
require('dotenv').config();

/* GET home page. */
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.port, () =>
  console.log(`Example app listening on port ${process.env.port}!`),
);
module.exports = app;
