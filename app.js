var express = require("express"); // This line calls the express module
var app = express(); //invoke express application

var fs = require('fs');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// we need some way for the app to know where to look
app.use(express.static("views"));

app.use(express.static("scripts"));

var contact = require("./model/contact.json") //Allw access to contact json file

// roo to render index page
app.get("/", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("index.ejs");
    console.log("Its true you know!")
    
});



// root to render products page
app.get("/products", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("products.ejs");
    console.log("Its true you know!")
    
});


// root to render contact info page
app.get("/contacts", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("contacts.ejs", (contact));
    console.log("Im contacts page!")
    
});

// root to render contact info page
app.get("/addcontacts", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("addcontacts.ejs", (contact));
    console.log("Im contacts page!")
    
});


// root to render contact info page
app.post("/addcontacts", function(req, res){
    
   // res.send("This is the best class ever");
    res.render("addcontacts.ejs", (contact));
    console.log("Im contacts page!")
    
});
 




// Now we need to tell the application where to run


app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Off we go again");
  
})
