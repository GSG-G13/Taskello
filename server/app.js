const express = require("express");
const router = require("./controllers");
const { join } = require("path");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "..", "public")));


app.use(router);

app.set("port", process.env.PORT || 9000);


module.exports = app;