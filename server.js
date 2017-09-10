
// Dependencies

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Article Model
var Article = require("./models/Article.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Express Setup
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// set up static directory 'public'
app.use("/public", express.static("./public"));

// MongoDB Configuration

// mongodb local connection
mongoose.connect("mongodb://localhost/nytreact");


var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(err){
	console.log("Mongoose Error: ", err);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function(){
	console.log("Mongoose connection successful.");
});


// Routes

// GET Route for saved articles

app.get("/articles", function(req,res){

	// Find all saved articles 
	Article.find({}, function(error, doc){

		if (error) {
			res.send(error);
		}
		else {

			res.json(doc);
		}
	});

});

// POST Route to save article to db

app.post("/save-article", function(req,res){

	var savedArticle = {
		title:title,
		date:date,
		url:url
	};

	// Create and save new Article to db
	var newArticle = new Article(savedArticle);

	newArticle.save(function(error, doc){

		if (error) {
			res.send(error);
		}
		else {
			res.json(doc);
		}
	});
});

// DELETE -  components will delete a saved article in the database
app.delete("/delete/:id", function(req,res){

	// delete the article by id
	Article.findByIdAndRemove(req.params.id).exec(function(error, doc){
		deleteRes.json(doc);
	});
});


// START LISTENER
// =============================================================
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});	