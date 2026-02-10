const Pin = require("../models/Pin");

exports.createPin = async (req, res) => {
  try {
    const { title, description } = req.body;

    const pin = await Pin.create({
      title,
      description,
      image: `/uploads/${req.file.filename}`,
      user: req.userId
    });

    res.status(201).json(pin);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getPins = async (req, res) => {
  try {
    const pins = await Pin.find()
      .populate("user", "username")
      .sort({ createdAt: -1 });

    res.json(pins);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.likePin = async (req, res) => {
  try {
    const pin = await Pin.findById(req.params.id);
    pin.likes += 1;
    await pin.save();
    res.json(pin);
  } catch (error) {
    res.status(500).json({ error });
  }
};
