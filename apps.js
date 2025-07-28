const express = require("express");
const app = express();
const port = 5174;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("Danke für deine Nachricht!");
});

app.listen(port, () => {
  console.log(`Website läuft auf http://localhost:${port}`);
});
