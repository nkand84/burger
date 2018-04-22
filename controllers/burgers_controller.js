var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    // res.send("Hello!");
    // res.render("index");
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });







// Export routes for server.js to use.
module.exports = router;