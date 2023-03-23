// Streaming means listening to music or watching video in real time
// instead of downloading a file to your computer and watching it later

// readable - stream which is used for operation

// writable - stream which is used for write operation

// duplex - stream which can be used for both read and write operation

// transform - a type of duplex stream where the output is computed based on input



const fs = require('fs');
const http = require("http");

const server = http.createServer((req, res) => {

  const rstream = fs.createReadStream("data.txt");
  // readstream created and stored the data from data.txt into rstream variable

  rstream.pipe(res);
  // rstream.pipe() function is used to send data. parameter indicates where to send the data . we have to render it on web page so given it to the res

} );


server.listen( 3000  , ()=> console.log('listening'));




