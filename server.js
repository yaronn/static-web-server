var express = require('express')
  , app = express();

app.use(express.static(process.cwd()));

app.listen(7070, "127.0.0.1");

console.log("listening on http://localhost:7070/ for folder " + process.cwd())