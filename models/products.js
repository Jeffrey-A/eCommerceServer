const Sequelize = require('sequelize');
const database = require('../database');

const Products = database.define('products', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },

    name:{
        type:Sequelize.TEXT
    },

    description:{
        type: Sequelize.TEXT
    },

    category:{
        type:Sequelize.TEXT
    },

    img:{
        type:Sequelize.TEXT
    },

    price:{
        type: Sequelize.INTEGER
    }
}, 

{
    timestamps: false

});

module.exports = Products;