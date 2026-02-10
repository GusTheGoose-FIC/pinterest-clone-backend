import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import pinsRoutes from "./routes/pins.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pins", pinsRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("API Pinterest Clone funcionando 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
