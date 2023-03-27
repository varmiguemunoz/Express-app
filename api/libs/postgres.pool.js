const { Pool } = require('pg');

const { config } = require('./../config/config');

const USER =encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI });

module.exports = pool;


//esta es una forma no muy segura de hacerse
// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'nico',
//   password: 'admin123',
//   database: 'my_store'
// });
