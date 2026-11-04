//import express module
const express = require('express');
// import cors modules
const cors = require('cors');


//Creates an Express application
// app representes the express application 
const app = express();
// app Configuration 



//Security config 
app.use(cors());
// JSON is used for sending and receiving data
app.use(express.json());
// get object data from request 
app.use(express.urlencoded({extended:true}))



// traitement logiques des requests
// math 1

// math 2

// math 3


// make app importable to other files
module.exports = app;