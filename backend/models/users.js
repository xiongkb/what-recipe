const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
    UserName: { type: String },
    SavedRecipe: { type: String }
})

module.exports = mongoose.model("User", User);