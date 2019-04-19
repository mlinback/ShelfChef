var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PantrySchema = new Schema({

    type: String


});

var Ingredient = mongoose.model("Ingredient", IngredientsSchema);

module.exports = Pantry;