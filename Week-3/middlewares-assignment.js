const e = require('express');
const express = require('express');

//Request Counter 


const app = express();
let requestCount = 0;

app.use(function(req, res, next){
  requestCount = requestCount+1;
  next();
})

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john'})
});

app.post('/user', function(req, res){
    res.status(200).json({ msg: 'created dummy user'});
})

app.get('/requestCount', function(req, res){
    res.status(200).json({ requestCount });
});


//Rate limitter

let numberofRequestsForUser = {};
setInterval(()=> {
      numberofRequestsForUser = {};
}, 1000)


app.use(function(req, res, next){
    const userId = req.headers["user-id"]

    if(numberofRequestsForUser[userId]){
        numberofRequestsForUser += 1;
       if(numberofRequestsForUser[userId]>5){
        res.status(404).send('no entry');
       }
       else{
        next();
       }
    }
    else{
        numberofRequestsForUser[userId]=1;
        next();
    }
})

// ErrorCount

let erroCount = 0;

app.get('/user', function(req, res){
    throw new Error('some error');

    res.status(200).json({ name: 'John'});
});

app.post('/user', function(req, res){
    res.status(200).json({ msg: "dummy user created"});
});

app.get('/errorCount', function(req, res){
    res.status(200).json({ erroCount });
});

app.use(function(err, req, res, next){
    res.status(404).send({})
    erroCount += 1;
})




app.listen(3000);
module.exports = app;