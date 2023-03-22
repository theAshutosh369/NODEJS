

const os = require("os");

console.log( os.arch())
// returns which architechure your os is currently using 32 bit / 64 bit 

console.log(os.platform());
// returns which platform are you using !


console.log(os.freemem()/1024/1024/1024);
// returns free memory value

console.log(os.totalmem() / 1024 / 1024 / 1024 );
// returns total memory value

console.log(os.type());
// returns type of os


