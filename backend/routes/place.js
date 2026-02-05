import express from "express";
import { fetchPlaces } from "../services/overpass.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { lat, lng, interest } = req.query;

    if (!lat || !lng || !interest) {
      return res.status(400).json({ error: "Missing params" });
    }

    const places = await fetchPlaces({
      lat,
      lng,
      interest
    });

    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
