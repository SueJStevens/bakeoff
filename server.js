var express = require("express");
var moment = require("moment");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

//see this website for info re moment.js and handlebars setup: http://moment.handlebars.solidgoldpig.com/index.html
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

//see this stackOverflow for more help:  https://stackoverflow.com/questions/53357416/getting-specific-number-of-days-with-moment-js-node-npm-and-handlbars?noredirect=1#comment93592623_53357416
//see this website for more help:  https://code-maven.com/handlebars-helpers
Handlebars.registerHelper('days-diff', date => {
  return Math.abs(moment().startOf('day').diff(moment(date).startOf('day'), 'days')+1);
});

/*
const template = Handlebars.compile(`
  Until 12/10/2018: {{days-diff "12/10/2018"}}
  Until 12/25/2018: {{days-diff "12/25/2018"}}
  Until 12/25/2019: {{days-diff "12/25/2019"}}
`); 
*/

//console.log(template());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/bakeoff_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  //console.log("Server listening on: http://localhost:" + PORT);
});
