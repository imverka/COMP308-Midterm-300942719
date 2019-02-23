let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "favBooks"
});

module.exports = mongoose.model('midterm-300942719', gamesSchema);
