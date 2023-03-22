

const fs = require('fs');


// Asynchronous way
fs.readFile('f2.txt', 'utf-8' , (err , data )=>{ console.log(data)})
console.log("hello")
// there is callback and it will take time to load the data so Asynchronous way executes further statements as their output is already present


// // Synchronous way 
// const data = fs.readFileSync("f2.txt", "utf-8");
// console.log( data );
// console.log('namaste')
// in case of Synchronous way it will execute line by line whatever time it takes doesnt matter 



// fs.mkdir('random',(err)=> console.log(err))
// // creates directory using fs module

// fs.rmdir("random", (err) => console.log(err));
// // removes directory using fs module

// fs.rm("f2.txt", (err) => console.log(err));
// // removes the files using fs module




// USE ASYNCHRONOUS WAY WHILE WORKING WITH NODEJS. 





