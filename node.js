var express = require('express');  
var app = express();  
    
  
app.set('view engine', 'ejs');  
  
app.get("/", function(req, res) {   

var cost_installation = 2269; 
var cost_elevator=22695;
var prixtotal = cost_elevator+cost_installation;


  res.render("pages/script", {name:cost_installation}); 
  res.render("pages/script", {name:cost_elevator});
  res.render("pages/script", {name:total});




}); 
    

app.listen(3000, function(req, res) { 
  console.log("Connected on port:3000"); 
});

//c'est tout ce que j'ai pu faire entrer ses variables dans le script.ejs pour cacher ses valeurs pour ensuite pouvoir l'appliquer sur le html