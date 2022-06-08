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
    standardConformingStrings: false,
        dialectOptions: {
        // Your pg options here
        // ...
        clientMinMessages: 'ignore' // case insensitive
        }
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.brands = require("./sequelize-model.js")(sequelize, Sequelize);
module.exports = db;
