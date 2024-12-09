// **Group Name : GLOBAL PHARMACY**
// **MEMBERS** 
// - Bibin Tom Joseph  -  8991987
// - Gihan Edirisinghe Kodikara  -  8946990
// - Kishan Kumar Das  -  8995646
// - Shanntha Kumar Krishna Kumar  -  8936449

const express = require('express');
const pharmacyRoutes = require('./routes/pharmacyRoutes');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse URL   -encoded data
app.use(express.json()); // Parse JSON data
app.use(express.static('public')); // Serve static files
app.set('view engine', 'ejs');


// Routes
app.use(pharmacyRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
