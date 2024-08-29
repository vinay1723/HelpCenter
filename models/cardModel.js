const mongoose = require("mongoose");
const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "card must have a title"],
  },
  description: {
    type: String,
    required: [true, "card must have a description"],
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
