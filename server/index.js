// Express imports
const express = require('express');
const server = express();
const bodyparser = require('body-parser');

// Database imports
const mongoose = require('mongoose');

const DATABASE_NAME = 'letzgo_database';
const CONNECTION_STRING = 'mongodb+srv://sam:A7wf1XbQpxoCyZI3@letzgo-cluster-fspr1.mongodb.net/' + DATABASE_NAME +'?retryWrites=true';

mongoose.connect(CONNECTION_STRING,
  {useNewUrlParser: true});

mongoose.connection
  .once('open', () => {
    console.log('DATABASE CONNECTED')
});

server.use(bodyparser.json());

server.get('/api', (req, res) => {
  res.json("Welcome to the V1 LetzGo api")
});

// Auth
// server.use('/api', require('./routes/authentication_routes_v1'));
// // Artist routes
// server.use('/artists', require('./routes/artist_routes_v1'));
// // Concert routes
// server.use('/concerts', require('./routes/concert_routes_v1'));
// // Ticket routes
// server.use('/tickets', require('./routes/ticket_routes_v1'));

server.listen(3000, () => {
  console.log("server works");
});
