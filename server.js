const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const movesRouter = require('./user-routes/routes.js')
const server = express()

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/moves', movesRouter);


module.exports = server;
