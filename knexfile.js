// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, 
    connection: {
      filename: './jiujitsu.db3',
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },

  production: {
    client: 'pg',
    connection: { 
     // connectionString: process.env.DATABASE_URL, 
      connectionString: process.env.DATABASE_URL, 
      ssl: {
        rejectUnauthorized: false
      }
    },

    pool:{
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  }
  

};
