const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



let content={
    room:"",
    service:"",
    instruct:""

};

app.get("/", function (req,res) {
    res.render("home");
})

// app.get("/home", function (req,res) {
//     res.render("home");
// })
app.get("/index", function (req,res) {
    res.render("index");
})
app.get("/update", function (req,res) {
    res.render("update", {content:content});
})
app.post("/update", function (req,res) {
    // res.render("update")

    content={
        room:req.body.Roomnumber,
        service:req.body.check,
        instruct:req.body.sinstructions
    }



    res.redirect("/");
})

app.listen(4000, function() {
    console.log("Server started on port 4000");
  });
  