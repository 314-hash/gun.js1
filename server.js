const express = require('express');
const Gun = require('gun');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// Serve static assets from root directory
app.use(express.static(__dirname));

// SPA Fallback: Serve index.html for any unhandled GET request
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the express server
const server = app.listen(port, () => {
    console.log(`Salamat Doc Chat server is running on port ${port}`);
});

// Initialize Gun with the express server
const gun = Gun({
    web: server,
    radisk: true, // Enable Radisk storage engine for persistence
    localStorage: false // Disable client localStorage on Node server
});

console.log('Gun.js backend relay server initialized.');
