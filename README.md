# Holidaze Bakeoff Application
Full Stack Application to demonstrate Node, Express, Handlebars and MVC Design
Bootcamp Assignment 11/10/2018 - Node Express Handlebars MVC Design (Burger)

## Demo
*Holidaze Bakeoff!* is deployed to Heroku.  Please check it out [here](https://blooming-depths-36189.herokuapp.com/).

## Description
*Holidaze Bakeoff!*, a full-stack site, is a holiday food logger with MySQL, Node, Express, Handlebars and a homemade ORM (Yum!). The applications follows the MVC design pattern, uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.  The application also incorporates moment.js.

* *Holidaze Bakeoff!* lets users input the names of holiday treats they'd like to eat.

* Whenever a user submits a food item, the app will display the item on the left side of the page -- waiting to be devoured.

* Each food in the waiting area also has a `Eat!` button. When the user clicks it, the holiday treat will move to the right side of the page where a `Exercise!` button is available.

* The app will store every treat in a database, whether eaten or not.  Duplicates are highly encouraged because one cookie is never enough!

* But Summer is right around the next corner, so the `Exercise!` button will delete the treat from the database.

* The application includes four filters so the user can view only a specific category of foods:  `Pies`, `Cookies`, `Cakes` and `Other`.  The `Home` icon will remove any filters applied.

## Installation
To install the application follow the instructions below:
```
git clone https://github.com/SueJStevens/bakeoff
cd bakeoff
npm install
```
## Running Locally
The app requires a local MySQL Server.  Locate the folder `db` and run `Schema.sql` and `seeds.sql` to set up the database in your local environment.

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice.  An example is shown below.
```
export PORT=8080
```
After the `PORT` environment variable has been set, run the Node.js application with the command below.
```
node server.js
```
The application will now be running locally on `PORT`, in this case that is `PORT 8080` You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:8080`.

## Technology
### Hosting Platform
  * Heroku (https://www.heroku.com/home)
### Front-End
  * HTML, CSS, JavaScript, jQuery
  * Bootstrap v4 (https://getbootstrap.com/)
### Back-End
  * Javascript, jQuery
  * Node.js (https://nodejs.org/en/)
  * Express.js (https://expressjs.com/)
  * Handlebars.js (http://handlebarsjs.com/)
  * MySQL
  * MomentJS (https://momentjs.com/)