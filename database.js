let Sequelize = require('sequelize');

const database = new Sequelize('postgres', 'postgres', '1997mayo27', {
    host: 'localhost',
    dialect: 'postgres' 
});

module.exports = database;
