//Write Basic Express Boilerplate Code
// Write express.json() Middlewares


const express = require("express")
const app = express();

app.use(express.json);

app.post("todo", function(req, res) {

})

app.get("todos", function(req, res){

})

app.put("/completed", function(req, res){
    
})