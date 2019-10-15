var express = require('express');
var cors =  require('cors');
require('dotenv').config();

/* GET home page. */
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('SSC Reporting!');
});

app.post('/', (req, res) => {
  console.log(req);
  res.send('SSC Reporting!');
});
console.log("*****************************Starting app********************************")
app.listen(3000);