const express = require('express');
const cors = require('cors');
const path = require('path');
const complaintRoutes = require('./routes/complaintRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..')));

// Test Route
app.get('/api/test', (req, res) => {
    res.send('Backend working');
});

// Complaint Routes
app.use('/api/complaints', complaintRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

