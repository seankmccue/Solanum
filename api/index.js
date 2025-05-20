require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors'); 
const serverless = require("serverless-http");

const app = express();

app.use(cors());

const gardenSchema = new mongoose.Schema({
    name: String,
    mission: String,
    location: String,
    instagram: String,
    email: String
});

const Gardens = mongoose.model("Garden", gardenSchema, "Gardens");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {console.log("Database connection successful");}).catch((err) => console.error("Database connection error:", err))
.catch(err => {
  console.error("❌ Mongo connection error:", err);
  process.exit(1);
});


app.get("/api/garden", async (req, res) => {
  try {
    const gardens = await Gardens.find();
    res.json(gardens);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gardens" });
  }
});

// app.listen(8080, function () {
//     console.log("server listening on port 8080");
// });

module.exports = serverless(app);
