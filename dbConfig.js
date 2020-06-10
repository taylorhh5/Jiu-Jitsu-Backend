const knex = require('knex');

const knexConfig = require('./knexfile.js');

const dbENnv = process.DB_ENV || 'development';

module.exports = knex(knexConfig[dbEnv]);
