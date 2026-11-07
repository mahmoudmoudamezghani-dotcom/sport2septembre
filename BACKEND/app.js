//code minimal de app.js de tout des application:
/*{const express = require('express');
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
module.exports = app;}*/ 

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
// format de les traitement de requetes 
/*
app.methode_HTTP("/path",(req,res)=>{....});
 */
// business logic : All matches 
app.get("/matches",(req,res)=>{
    console.log("Get All matches")}
);

// business logic : match by id 
app.get("/matches/:id",(req,res)=>{
    console.log("Get match by Id ")
});


// business logic : delete match by Id
app.delete("/matches/:id",(req,res)=>{
    console.log("delete match by ID")
}); 

// business logic : add match 
app.post("/matches",(req,res)=>{
    console.log("addition match")
});

// business logic : update match 
app.put("/matches",(req,res)=>{
    console.log("update match")
});


// make app importable to other files
module.exports = app;