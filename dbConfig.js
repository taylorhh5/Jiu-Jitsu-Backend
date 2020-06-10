const knex = require('knex');

const knexConfig = require('./knexfile.js');

const dbEnv = process.DB_ENV || 'production';

module.exports = knex(knexConfig[dbEnv]);
