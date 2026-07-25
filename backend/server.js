const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const propertiesPath = path.join(__dirname, "data", "properties.json");
const messagesPath = path.join(__dirname, "data", "messages.json");

function readProperties() {
  return JSON.parse(fs.readFileSync(propertiesPath, "utf-8"));
}

function readMessages() {
  if (!fs.existsSync(messagesPath)) return [];
  return JSON.parse(fs.readFileSync(messagesPath, "utf-8"));
}

function saveMessage(message) {
  const messages = readMessages();
  messages.push(message);
  fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2));
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", company: "The Aniexim Limited" });
});

// Get all properties
app.get("/api/properties", (req, res) => {
  try {
    const properties = readProperties();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: "Could not load properties" });
  }
});

// Get single property
app.get("/api/properties/:id", (req, res) => {
  try {
    const properties = readProperties();
    const property = properties.find((p) => p.id === req.params.id);
    if (!property) return res.status(404).json({ error: "Property not found" });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: "Could not load property" });
  }
});

// Contact form submission
app.post("/api/contact", (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Name, phone, and message are required." });
  }

  const entry = {
    name,
    phone,
    email: email || null,
    message,
    receivedAt: new Date().toISOString()
  };

  try {
    saveMessage(entry);
    res.json({ success: true, message: "Thank you — we'll get back to you shortly." });
  } catch (err) {
    res.status(500).json({ error: "Could not save your message. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`The Aniexim Limited API running on http://localhost:${PORT}`);
});
