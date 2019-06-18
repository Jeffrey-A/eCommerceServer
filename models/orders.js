const Sequelize = require('sequelize');
const database = require('../database');

const Orders = database.define('orders', {
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