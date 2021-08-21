const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load data, parse to json
const data = fs.readFileSync('./data/states.json');
const states = JSON.parse(data);

// TODO: Create a GET '/states' route that returns the JSON list states constant

module.exports = router;
