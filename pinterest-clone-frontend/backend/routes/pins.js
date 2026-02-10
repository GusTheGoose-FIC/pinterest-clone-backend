import express from "express";
import Pin from "../models/Pin.js";

const router = express.Router();

/**
 * GET /pins
 * Obtener todos los pines
 */
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find().sort({ createdAt: -1 });
    res.json(pins);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo pines" });
  }
});

/**
 * POST /pins
 * Crear un pin
 */
router.post("/", async (req, res) => {
  try {
    const newPin = new Pin(req.body);
    const savedPin = await newPin.save();
    res.status(201).json(savedPin);
  } catch (error) {
    res.status(500).json({ message: "Error creando pin" });
  }
});

export default router;
