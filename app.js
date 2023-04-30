const { urlencoded } = require("express");
const express = require("express");
// const fs = require("fs");
const path = require("path");
const app = express();
const port = 8000;

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res) => {
    const params = {}
    res.status(400).render("home.pug", params);
});

app.get("/contact", (req,res) => {
    const params = {}
    res.status(400).render("contact.pug", params);
});

app.listen(port, () => {
    console.log(`The application successfully started on port ${port}`)
})