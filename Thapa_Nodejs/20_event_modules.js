

// nodejs has built in module called events 
// where you can create , fire and listen for your own events


const EventEmitter = require('events')
// class require kel

const event = new EventEmitter();
// EventEmitter ch object create kel 


event.on("sayMyName", () => {
  console.log("My name is Ashutosh !");
});

event.on("sayMyName", () => {
  console.log("My middlename is Sandeep !");
});

event.on("sayMyName", () => {
  console.log("My lastname is Birajdar !");
});
// defination of the event 

 
event.emit( 'sayMyName');
// declare the event . remember that event declaration should always be after its defination implimentation
// we can do multiple functions using one event as you can see we have done 3 functions using only 1 event  



// IMPLEMENTATION OF EVENT WITH PARAMETERS 

event.on( 'myInfo' , ( name , age , city )=>{
    console.log( `my name is ${name} and i am ${age} years old and i live in ${city} `);
})

event.emit( 'myInfo' , 'Ashutosh' , 20 , 'solapur')
// first sodun bakiche sagle arguments ahet 