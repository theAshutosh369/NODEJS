

const http = require('http');
// http module will help to create server 

const server = http.createServer( (req, res)=>{

    console.log( req.url ) // ignore the /favicon.ico in console
    if( req.url=='/about'){
        res.write("<h1> responding to the server ! </h1>");
        res.end("ending the response !");
    }
    else{
        res.write("<h1> 404 not found </h1>")
        res.end('end !!')
    }

})
// http.createServer will create a server and stores it into server variable 
// it takes 2 parameters req and res 
// req simply means request and res means response that server will return onto the web page 
// req.url is the string that we enter after localhost:3000 in the link section of browser. 
// res.write will render onto the localhost
// res.end is used to end the response of server.

server.listen( 3000 , ()=>{
    console.log("listening to the port 3000 !!") 
})
// specifying localhost . callback is optional . server.listen(3000) will also work 










