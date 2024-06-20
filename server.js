// Dependencies 
const express = require('express'); // Import express
const path = require('path'); // Import path to work with files
const session = require('express-session'); // Import express session for managing sessions and storing sessions in cookies
const exphbs = require('express-handlebars'); // Import express handlebars to use Handlebars as templating engine
const routes = require('./controllers'); //Import routes from controllers directory
const dotenv =  require("dotenv");
const sequelize = require('./config/connection'); // Import the Sequelize instance for database connection configuration
const SequelizeStore = require("connect-session-sequelize")(session.Store); //Import the Sequelize store for session storage

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create( {
    helpers: {
    limit: function (arr, limit) {
      if (!Array.isArray(arr)) { return []; }
      return arr.slice(0, limit);
    }
  }
  }); // Set up handlebars engine, passing in the helpers function

// Define a session configuration object named 'sess'
const sess = {
    secret: "Secret",
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };


app.use(session(sess)); // Use the session middleware with the configuration set to 'sess'. This sets up session management for the express application.


app.engine("handlebars", hbs.engine); // Creates handlebars templating engine
app.set("view engine", 'handlebars'); 

app.use(express.json()); // Middleware to parse the JSON data in the request body
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data in the request body. extended: true allows for rich obj and arrays to be encoded into the URL-encoded format
app.use(express.static(path.join(__dirname, "public"))); // Middleware to serve static files from the 'public' directory
app.use(routes); // Set the routes obj for various endpoints in the applicaiton

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
);
});
