require("dotenv").config();
const express = require('express')
const cors = require('cors')
const datab = require('./config/dbmongo')
const app=express()

/**
 * @author "Diego Fernando Becerra Zambrano"
 */

const logroutes = require('./routes/auth');
const { path } = require("express/lib/application");

const port = 3000

//app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(logroutes)
app.use(express.static('./views'));

app.get('/', function(req, res) {
    res.render('index.html');})



app.listen(port,() => {console.log("Running at port 3000")})

datab()