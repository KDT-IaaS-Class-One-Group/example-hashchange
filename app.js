const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(__dirname + '/public/index.html')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})