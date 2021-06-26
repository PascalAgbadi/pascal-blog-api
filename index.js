const express = require('express');
const request = require('request');
const cors = require('cors');
require('dotenv').config()


const port = process.env.PORT;
const app = express();

app.use(cors());

app.use( (req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

//routing to the weather display
app.get('/posts', (req,res) => {
  request(process.env.API+'posts', 
  (err,req, body) => {
    if(!err && res.statusCode==200){ 
      res.send(body);
    }
  })
});
//routing to the weather display
app.get('/posts/:id', (req,res) => {
    const id = req.params.id;
    request(process.env.API+'posts/'+id, 
    (err,req, body) => {
      if(!err && res.statusCode==200){ 
        res.send(body);
      }
    })
  });

app.get('*', (req,res) =>{
  res.sendStatus(404);
});

//start server
app.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);})

