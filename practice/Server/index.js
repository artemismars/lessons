const express = require("express");
const app = express();
const router = require("../Server/Routes/router");

const port = process.env.PORT || 3000;
const expressSanitizer = require("express-sanitizer");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(expressSanitizer());
app.use(router);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
