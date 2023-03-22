

const http = require('http')
const fs = require("fs");


// created the server 
const server = http.createServer( (req, res )=>{
    if( req.url == '/fetchapi')   // if url says fetchapi then read the useApi.json file using fs module 
    {
        fs.readFile( `${__dirname}/userApi.json` ,'utf-8', (err , data)=>{

          // `${__dirname}/userApi.json` is given as exact path 
          // utf-8 is for not getting buffer file 
        
          const objData = JSON.parse(data); // converted json form to object form 
          console.log(objData); // printed in console 
          res.write(`<h1> ${objData[1].url} </h1>`); // rendered the url which is at the first index 
          res.end("end");  // end of document 
        } )
    }
})

server.listen( 3000 , ()=> console.log('listening') );
// listening to the port 



// in this way Api's are read 