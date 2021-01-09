const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const expressSanitizer = require("express-sanitizer");
const router = require("./Router/router");

app.use(expressSanitizer());
app.use(router);

app.listen(port, (req, res) => {
  console.log(`listening to port: ${port}`);
});
