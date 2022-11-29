const express = require('express');
const app = express();
require("colors");
app.use(express.static(__dirname + '/src/public'));
app.use(express.static('./src'));
const server = app.listen(2003, () => {
  return console.log(`Chạy tốc hành → PORT ${server.address().port}`.red);
});