// Creating an Http Server
// Express is not a default library.

const express = require("express");


const app = express();

function calculateSum(n){
    let ans=0;
    for(let i=0;i<=n;i++) {
        ans += i;
    }
    return ans;  
}


app.get("/", function(req, res) {
   const n =  req.query.n;
   const sum = calculateSum(n);
   
    res.send("Hi There, your sum answer is"+ sum);

})


const express = require('express');
const port = 3000;


var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json())

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    let numberofHealthykidneys =0;
    for(let i=0;i<numberofHealthykidneys;i++){
        if(johnKidneys[i].healthy){
            numberofHealthykidneys += 1;
        }
    }
    const numberofunhealthyKidneys = numberofKidneys - numberofHealthykidneys;
    res.json({
        numberofKidneys,
        numberofHealthykidneys,
        numberofunhealthyKidneys
    })
    console.log(johnKidneys);
})

app.post("/", function(req, res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })

})

app.put("/", function(req, res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }

    res.json();
})
app.listen(3000);