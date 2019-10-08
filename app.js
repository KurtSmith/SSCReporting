var express = require('express');
var cors =  require('cors');
require('dotenv').config();

/* GET home page. */
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('SSC Reporting!');
});

app.listen(80, () =>
  console.log(`Example app listening on port 80!`),
);
module.exports = app;
