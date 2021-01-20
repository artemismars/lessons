require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const expressSanitizer = require("express-sanitizer");
const router = require("./Routes/router");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(expressSanitizer());
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
