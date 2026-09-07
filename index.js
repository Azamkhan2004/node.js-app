const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hii! This Node.js application is running successfully azam.");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Application is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
