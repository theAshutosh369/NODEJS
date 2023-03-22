
const path = require('path');

console.log( 'the filename is : ' + path.basename("NODEJS/Thapa_Nodejs/11_Path.module.js")  );
// returns the filename of given path

console.log('the directory name is : ' + path.dirname("NODEJS/Thapa_Nodejs/11_Path.module.js"));
// returns the filename of given path

console.log('the extension of file : ' + path.extname("NODEJS/Thapa_Nodejs/11_Path.module.js"));
// returns the filename of given path

console.log(path.parse("NODEJS/Thapa_Nodejs/11_Path.module.js"));
// allthe above steps in one function 


