const Card = require("./../models/cardModel");

exports.allCards = async (req, res, next) => {
  try {
    const allDocs = await Card.find();
    res.status(200).json({
      status: "success",
      data: { allDocs },
    });
  } catch (error) {
    console.log(error.message);
    res.status(200).json({
      status: "failed",
      message: "failed to fetch data",
      data: {},
    });
  }
};

exports.createCard = async (req, res, next) => {
  try {
    const newCard = await Card.create(req.body);

    res.status(200).json({
      status: "success",
      message: "new card created",
      data: {
        newCard,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(204).json({
      status: "failed",
      message: "failed to created",
      data: {
        newCard,
      },
    });
  }
};

exports.getCard = async (req, res, next) => {
  try {
    console.log(req.params.title);
    const card = await Card.find({ title: req.params.title });
    res.status(200).json({
      status: "success",
      data: { card },
    });
  } catch (error) {
    console.log(error.message);
    res.status(204).json({
      status: "failed",
      message: "failed to fetch data",
      data: {},
    });
  }
};

// http:127.0.0.1/api/v1/cards
//http:127.0.0.1/api/v1/cards/:title
