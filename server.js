require("dotenv").config();

const express = require("express");

const app = express();

app.set("view engine", "ejs");

//home route
app.get("/", (req,res)=>{
    res.render("home", { title: "Home" });
})

app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
