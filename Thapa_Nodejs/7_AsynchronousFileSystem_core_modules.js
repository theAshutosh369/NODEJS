
// working on Asynchronous file system 


const fs = require('fs');


fs.writeFile( 'f2.txt' , 'writing Asynchronously in the file.' , ()=>{console.log('file is created successfully !')})
// we have to pass a callback function ( a function which is passed as a parameter) while working on files asynchronously otherwise it will throw an error ! 


fs.appendFile( 'f2.txt' , 'appending Asynchronously ! ' , ()=> console.log('appended ! '));
// same as that of synchronous but callback fn is must to be passed 


fs.readFile( 'f2.txt' , 'UTF-8' , ( err  , data )=> {
    console.log( data)
    console.log(err);

 } );
// no need to convert it into String like we done in the synchronous way 
// err is used to get the error and display it 