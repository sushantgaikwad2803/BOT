const https = require("https");
const express = require("express");

const app = express();

// Railway gives PORT automatically
const PORT = process.env.PORT || 3000;

const URL = "https://your-backend.onrender.com/ping/";
const INTERVAL = 10 * 60 * 1000;

function pingServer() {
  const time = new Date().toLocaleTimeString();

  https.get(URL, (res) => {
    console.log(`[${time}] ✅ Ping Success: ${res.statusCode}`);
  }).on("error", (err) => {
    console.log(`[${time}] ❌ Error: ${err.message}`);
  });
}

// Start bot
pingServer();
setInterval(pingServer, INTERVAL);

// Dummy route (IMPORTANT for Railway)
app.get("/", (req, res) => {
  res.send("Ping Bot Running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});