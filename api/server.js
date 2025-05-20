const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors'); 
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

mongoose.connect("mongodb+srv://kacharry:OYEwfq7rGOseCZQU@gardens.e5m8xkw.mongodb.net/Gardens?retryWrites=true&w=majority")
.then(async () => {console.log("Database connection successful");}).catch((err) => console.error("Database connection error:", err));


app.get("/api/garden", async (req, res) => {
  try {
    const gardens = await Gardens.find();
    res.json(gardens);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch gardens" });
  }
});

app.listen(8080, function () {
    console.log("server listening on port 8080");
});