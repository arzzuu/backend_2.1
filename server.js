const express = require('express');
const app = express();
const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.error(err);
  }
  let str = JSON.parse(data);

  app.get('/', function (req, res) {
    res.send('Сделайте запрос к пути : /employees');
  });
  app.get('/employees', function (req, res) {
    res.send(str);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
