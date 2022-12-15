const mySQL = require('mysql2')
require('dotenv').config()


const DB_IP   = process.env.DB_IP
const DB_NAME = process.env.DB_NAME
const DB_PORT = process.env.DB_PORT
const DB_USER = process.env.DB_USER
const DB_PWD  = process.env.DB_PWD

const connection = mySQL.createConnection({
  host: DB_IP,
  user: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  port: DB_PORT,
})

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return
  }
  console.log(`Connected to mySQL at ${DB_IP}:${DB_PORT}`)
})

module.exports = connection
