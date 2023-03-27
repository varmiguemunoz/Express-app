//para generar variables de entorno y hacer todo el codigo seguro.
//posteriormente necesitamos crear un archivo .env definiendo las variables de entorno y para que estas corran, debemos instalar el paquet 'npm install dotenv'

require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
}

module.exports = { config }
