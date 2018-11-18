var express = require("express");

var router = express.Router();

// Import the model (bakeoff.js) to use its database functions.
var bakeoff = require("../models/bakeoff.js");

// Create all our routes and set up logic within those routes where required.
router.get("/:productCat?", function (req, res) {
  var condition = req.params.productCat;
  var cardheader = "All Holiday Foods!";
  if (!condition) {
    bakeoff.all(function (data) {
      var hbsObject = {
        bakeoffs: data,
        cardheader: cardheader
      };
      //console.log(hbsObject);
      res.render("index", hbsObject);
    });
  } else {
    //console.log("Here is my condition!: " + condition);
    bakeoff.catfilter(condition, function (data) {
      //console.log(condition);
      if (condition = "other") {
        var str = "Other Goodies!";
      } else {
        var str = condition.charAt(0).toUpperCase() + condition.slice(1)+"!";
      }      
      //console.log(condition);
      var hbsObject = {
        bakeoffs: data,
        cardheader: str
      };
      
      console.log(hbsObject);
      //res.status(200).end();
      res.render("index", hbsObject);
    });
  }

  //check to see if productCat exists
  //if it does call bakeoff.catfilter
  //otherwise call bakeoff.all

});

// Create all our routes and set up logic within those routes where required.
router.get("/api/category", function (req, res) {
  var condition = req.query.productCat;
  //router.patch("/api/category/:productCat", function(req, res) {
  //var condition = req.params.productCat;

  //console.log("Category Filter", condition);

  bakeoff.catfilter(condition, function (data) {
    //console.log(data);
    var hbsObject = {
      bakeoffs: data

    };
    console.log(hbsObject);
    //res.status(200).end();
    res.render("index", hbsObject);
  });
});

/*
//trying to see if I can return an error or return anything at all!!!
  bakeoff.catfilter(condition, function(err, data) {

    if (err) {
      var hbsObject = {
        bakeoffs: data
      };  
      console.log("I've done something wrong!!"+ data);
      return err;
    } else {
    //console.log(data);
    var hbsObject = {
      bakeoffs: data
    };   
    console.log("I'm right"+hbsObject);
    res.render("index", hbsObject);
    res.status(200).end();
  }
  });
});
*/


router.post("/api/products", function (req, res) {
  bakeoff.create([
    "productName", "productCat"
  ], [
      req.body.productName, req.body.productCat
    ], function (result) {
      // Send back the ID of the new product
      res.json({ id: result.insertId });
    });
});

router.put("/api/product/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition id", condition);

  bakeoff.update({
    eaten: req.body.eaten
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/product/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  bakeoff.delete(condition, function (result) {
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
