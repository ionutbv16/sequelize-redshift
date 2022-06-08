const Sequelize = require("sequelize");
require("dotenv").config();
const envVars = process.env;

const sequelize = new Sequelize(
  envVars.REDSHIFT_DATABASE,
  envVars.REDSHIFT_USER,
  envVars.REDSHIFT_PASSWORD,
  {
    host: envVars.REDSHIFT_HOST,
    port: envVars.REDSHIFT_PORT,
    dialect: 'postgres',
        dialectOptions: {
        // Your pg options here
        // ...
        clientMinMessages: 'ignore' // case insensitive
        }
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./sequelize-model.js")(sequelize, Sequelize);
module.exports = db;


/*
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'postgres',
    dialectOptions: {
      // Your pg options here
      // ...
      clientMinMessages: 'ignore' // case insensitive
    }
  });
*/

