require("dotenv").config();
const express = require('express');
const router = express.Router();
const axios = require('axios');


router.post('/search', function(req, res) {
    const userIngredients = req.body.ingredients;
    let ingredientList = userIngredients.join("+");
    // console.log(userIngredients.join("+"));

    axios.get(`https://api.edamam.com/search?q=${ingredientList}&app_id=${process.env.edamamID}&app_key=${process.env.edamamKey}`)
        .then(response => res.send(response.data))
        .catch(err => res.status(500).send(err.response.data));
});

module.exports = router;