
// Working on Synchronous file system 


const fs = require("fs");
// to use the modules we have to first reauire those modules
// keep the name of variable same as that of the module so you can work with it easily


fs.writeFileSync("f1.txt", "wrote in the file f1");
// writeFileSync is function in fs(fileStructure) module that writes in the file. if file is present then well and good it writes in it simply but if its not present then it will first create the file and at the run time it will write to the file. 


fs.writeFileSync("f1.txt", "this is my second time writing in the file. ");
// if the file is present then it will override the content in it with new one 


fs.appendFileSync('f1.txt' , 'now i am appending the content in the file.')
// it appends the content at the end of content present in the file given as parameter


const read = fs.readFileSync('f1.txt');
console.log(  read.toString() );
// fs.readFileSync returns the buffer file to convert it into string use toString() function 


fs.renameSync( 'f1.txt' , 'newF1.txt');
// fs.renameSync( 'newF1.txt' , 'f1.txt');
// simply renames the file











