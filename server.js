//test commit


var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongojs = require("mongojs")
var path = require("path");
// var bodyParser = require('body-parser');

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = 3001;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/pantry", { useNewUrlParser: true });

var databaseUrl = "pantry";
var collections = ["ingredient"]

var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/addingredient", function(req, res){
  console.log(req.body);

  db.ingredient.insert(req.body, function(error, saved) {
    
    if (error) {
      console.log(error);
    }
    else {
      res.send(saved);
    }
  });
});

app.get("/all", function(req, res){
  db.ingredient.find({}, function(error, found){
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.get("/find/:id", function(req, res) {

  db.ingredient.findOne(
  {
    _id: mongojs.ObjectId(req.params.id)
  },
  function(error, found) {
    if (error) {
      console.log(error);
      res.send(error);
    }
    else {
      console.log(found);
      res.send(found);
    }
  }
  );
})

app.post("/update/:id", function(req, res){

  db.ingredient.update(
    {
      _id: mongojs.ObjectId(req.params.id,)
    },
    {
      $set: {
        ingredient: req.body.ingredient,
        modified: Date.now()
      }
    },
    function(error, edited) {
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        console.log(edited);
        res.send(edited);
      }
    }
  )
})

app.get("/clearall", function(req, res){

  db.ingredient.remove({}, function(error, response){
    
    if(error) {
      console.log(error);
      res.send(error);
    }
    else {
      console.log(response);
      res.send(response);
    }
  });
});



// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });