const express = require("express");
const expressSanitizer = require("express-sanitizer");
const router = require("./Routes/router");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(expressSanitizer());
app.use(router);

app.listen(port, () => console.log(`Server working on port ${port}`));
