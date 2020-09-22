setTimeout(function(){
    console.log("Inside Async call");
},0);

console.log("This is synchonroius");

//Async will be called after the synchrous opertation is completed
//Synchnous is executed first im the call stack
