// Express imports
const express = require('express');
const server = express();

// Database imports
const mongoose = require('mongoose');

const DATABASE_NAME = 'letzgo_database';
const CONNECTION_STRING = '';



server.get('/api', (req, res) => {
  res.json("Welcome to the V1 LetzGo api")
});

// Artist routes
server.use('/artists', require('./routes/artist_routes_v1'));
// Concert routes
server.use('/concerts', require('./routes/concert_routes_v1'));
// Ticket routes
server.use('/tickets', require('./routes/ticket_routes_v1'));

server.listen(3000, () => {
  console.log("server works");
});
