
function findSum(n){
  let ans=0;
  for(let i=1;i<n;i++){
    ans += i;
  }
  return ans;
}

function findSumtill100(){
    console.log( findSum(100));
}

setTimeout(findSumtill100, 1000)
console.log("Hello World");

//FileSystem Read

const fs= require("fs");
//filesystem module

fs.readFile("a.txt","utf-8", function(err, data){
    console.log(data);
})

console.log("hi there its Ayush");

const fs= require("fs");

//my own asynchronous function

function kiratsReadFile(){
    console.log("inside KiratReadFile");
    return new Promise(function(resolve){
        console.log("inside Promise")
        fs.readFile("a.txt","utf-8", function(err, data){
            console.log("Before Resolve");
            resolve(data);
        });
    })
}

//Callback function to call

function onDone(data) {
    console.log(data)
}

kiratsReadFile().then(onDone);



var d=new Promise(function(resolve){

});
console.log(d);

// Async Await 

function KiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        
        // DO some async logic  here
        setTimeout(function(){
            resolve("Hi there!");
        }, 3000)
        
    });
    return p;
}

 async function main(){
     console.log("Hi there2")
    let value = await KiratsAsyncFunction()
        console.log(value);
        console.log("hi there1")
    
}
main();
console.log("after main");

 