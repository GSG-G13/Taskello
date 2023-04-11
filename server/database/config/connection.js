require('dotenv').config();
const { Pool } = require('pg');
const DATABASE_URL = process.env.DATABASE_URL;


const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl : false,
  });
  
  module.exports = connection;