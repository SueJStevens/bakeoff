var express = require("express");

var router = express.Router();

// Import the model (bakeoff.js) to use its database functions.
var bakeoff = require("../models/bakeoff.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  bakeoff.all(function(data) {
    var hbsObject = {
      bakeoffs: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/products", function(req, res) {
  bakeoff.create([
    "productName", "productCat"
  ], [
    req.body.productName, req.body.productCat
  ], function(result) {
    // Send back the ID of the new product
    res.json({ id: result.insertId });
  });
});

router.put("/api/product/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  bakeoff.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/product/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  bakeoff.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
