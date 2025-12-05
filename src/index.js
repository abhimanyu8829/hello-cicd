﻿// server/index.js
const express = require("express");
const { exec } = require("child_process");
const app = express();
const PORT = 3001;

app.use(express.json());

app.post("/api/update", (req, res) => {
  console.log("📦 Update triggered!");
  exec("powershell.exe -File C:\\Users\\GTS89\\Desktop\\hello-cicd\\update.ps1", (error, stdout, stderr) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).json({ status: "error", message: error.message });
      return;
    }
    console.log(stdout);
    res.json({ status: "success", message: "Container updated!" });
  });
});

app.listen(PORT, () => {
  console.log(`🎯 Webhook server running on port ${PORT}`);
});
