const Sequelize = require('sequelize');
const database = require('../database');

const Users = database.define('users', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },

    name:{
        type:Sequelize.TEXT
    },

    email:{
        type:Sequelize.TEXT
    },
    password:{
        type:Sequelize.TEXT
    }
},

{
    timestamps: false

});

module.exports = Users;
