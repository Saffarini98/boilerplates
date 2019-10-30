const path = require("path");
const sassMiddleware = require("node-sass-middleware");

var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.use(
  sassMiddleware({
    /* Options */
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public/css/"),
    // debug: true,
    outputStyle: "compressed",
    prefix: "/css"
  })
);

app.use(express.static("public"));
app.listen(3000);
