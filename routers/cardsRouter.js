const express = require("express");
const router = express.Router();
const cardController = require("./../controllers/cardController");

router
  .route("/cards")
  .get(cardController.allCards)
  .post(cardController.createCard);
router.route("/cards/:title").get(cardController.getCard);

module.exports = router;
