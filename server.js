require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000; //USAR PUERTO ENCONTRADO, O SINO EL PUERTO 3000

app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
