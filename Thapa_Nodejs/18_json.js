

// json stands for javascript object notation 
// json is lightweight 
// format for storing and transforming data 
// json is often used when data is sent from server to web page 


 
const data = {
    name : 'ashutosh' ,
    age : 20 ,
    city : 'solapur'
}
console.log( data )
// data in object form 



const jsondata = JSON.stringify( data );
console.log( jsondata )
// to convert data in object form to json form stringify function is used 



const objdata = JSON.parse( jsondata )
console.log( objdata )
// to convert data in json form to object form parse function is used 



// now if we need to add the json data into a file we can add it 
const fs = require('fs')
fs.writeFile( 'file.json' , jsondata , (err)=>{
    console.log( err );
})
// file.json is filename and jsondata is data in the form of json we have added the json data into the file using fs module 



// reading from the json file 
fs.readFile( 'file.json', 'utf-8' , (err, data)=>{ 
    console.log( data ) // in json form 
    const orginaldata = JSON.parse( data ); // in object form 
    console.log(orginaldata);
})


 


