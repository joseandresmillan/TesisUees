const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mysql =require('mysql');

//Inicializadores 

const app = express();

//Settings
app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname, "views"));
app.engine('.hbs', exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"), //Uno los directorios 
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",//Nombro la extension 
  }));
app.set("view engine", ".hbs");

//Middlewares
app.use(express.urlencoded({ extended: false }
));

//Global 

//Routes
app.use(require('./routes/index.routes')); //Utiliza el archivo index.routes.js


//Static Files

app.use(express.static(path.join(__dirname + 'public')));

module.exports=app;