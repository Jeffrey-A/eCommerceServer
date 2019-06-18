const express = require('express');

//models
const Products = require('./models/products');
const Users = require('./models/users');
const Orders = require('./models/orders');



// for doing axios call without problems
const cors = require('cors');

//for have access to post request res.body
const bodyParser = require('body-parser');

//connecting to dababase
const database = require('./database');

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json())


database.authenticate()
  .then( ()=>{
        console.log("Connected database")
   })
   .catch((err)=>{
       console.log("Error "+ err)
   })

//routes
function getPruducts(arr){
    let data =[]
    for(let i =0; i < arr.length; i++){
        let columnData = arr[i].dataValues;
        let name = columnData.name;
        let description = columnData.description;
        let price = columnData.price;
        let category = columnData.category;
        let img = columnData.img

        data.push({name,description,price, category,img})

    }
    return data;
}

app.get('/', (req, res) =>{
    Products.findAll()
     .then((products)=>{
         console.log(products[0].dataValues)
         res.send("Got it")
     })
     .catch((err) =>{
        console.log("Error connecting to the database")
     })
    
})


app.post('/login', (req, res)=>{
    console.log(req.body)
    Users.findOne( {where:{email:req.body.email, password:req.body.password }})
     .then((users)=>{
        console.log(users.dataValues)
        res.send("success")
     })
     .catch((err)=>{
        console.log("errorr login")
     })
})

app.post('/register', (req,res)=>{
    let name= req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let newUser = {name, email, password}

    Users.create(newUser)
     .then( user =>{
         res.send("User created")
     })
     .catch(err=>{
         res.send("Error")
     })

    console.log(newUser);
})

app.get('/products', (req, res) =>{
    Products.findAll()
    .then((products) =>{
        let allProducts = getPruducts(products);
        res.json(allProducts)
    })
    .catch((err) =>{
        res.send("Error "+ err)

    });
})

app.delete('/deleteAccount/:id', (req, res)=>{
    
    Users.destroy({where: {name: req.params.id}})
    .then((deleted)=>{
        res.send(req.params.id + "was deleted") 
    })
})

app.put('/editAccount', (req, res)=>{

})



app.listen(3000, ()=>{
    console.log("I am running")
})
