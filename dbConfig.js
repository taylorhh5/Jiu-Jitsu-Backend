const knex = require('knex');

const knexConfig = require('./knexfile.js');

const dbEnv = process.DB_ENV || 'development';

module.exports = knex(knexConfig[dbEnv]);
