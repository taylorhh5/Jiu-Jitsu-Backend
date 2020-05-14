const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router.js')
const movesRouter = require('./user-routes/routes.js')
const userRouter = require('./user-routes/user-routes.js')
const server = express()

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', authRouter);
server.use('/api/users', userRouter);


server.use('/api/moves', movesRouter);


module.exports = server;
