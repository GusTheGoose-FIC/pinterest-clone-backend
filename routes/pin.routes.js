const router = require("express").Router();
const multer = require("multer");
const auth = require("../middleware/auth.middleware");
const {
  createPin,
  getPins,
  likePin
} = require("../controllers/pin.controller");

// Configuración de Multer
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// Rutas
router.post("/", auth, upload.single("image"), createPin);
router.get("/", getPins);
router.post("/:id/like", auth, likePin);

module.exports = router;
