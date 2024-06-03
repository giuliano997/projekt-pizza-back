const router = require("express").Router();
let Pizza = require("../models/pizza");

router.route("/").get((req, res) => {
  Pizza.find()
    .then((pizzas) => res.json(pizzas))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Pizza.findById(req.params.id)
    .then((pizza) => res.json(pizza))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
