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