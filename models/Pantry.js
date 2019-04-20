var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PantrySchema = new Schema({

    type: String


});

var Pantry = mongoose.model("Ingredient", PantrySchema);

module.exports = Pantry;