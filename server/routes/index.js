const express = require('express');
const router = express.Router();
const fs = require('fs');
const { nextTick } = require('process');

// Load data, parse to json
const data = fs.readFileSync('./data/states.json');
const states = JSON.parse(data);

// TODO: Create a GET '/states' route that returns the JSON list states constant
router.get('/states', function (req, res) { // creates a '/states' route
    res.send(states); // sends the states constant to the server
});

module.exports = router;
