const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/download', (req, res) => {
    const buffer = Buffer.alloc(10 * 1024 * 1024); // 10MB
    res.setHeader('Content-Length', buffer.length);
    res.send(buffer);
});

app.post('/upload', (req, res) => {
    req.on('data', () => {});
    req.on('end', () => {
        res.sendStatus(200);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
