const express = require("express");

const app = express();
const port = 3000;

app.get("/health-checkup", function(req,res){
  
    const kidneyId = req.query.kidneyId;
    const username = req.query.username;
    const password = req.query.password;

    if(username != "harkirat" && password != 'pass'){
        res.status(403).json({
            msg: "User doesn't exist",
        })
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "wrong inputs",
        })
        return;
    }

    res.send("Your Heart is Healthy");
});

app.listen(3000);


//Middleware Concept:

const express = require("express");


const app1 = express()

app.post("/health-checkup", function(req,res){

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your Kidney length is"+ kidneyLength);
});

app1.listen(3000);