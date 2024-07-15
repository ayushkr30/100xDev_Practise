const express = require("express");;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword  = "123456";

mongoose.connect(

);

const User1 = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {

}

app.post("/signin", async function (req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg: "User doesn't exist in our in memory DB",
        });
    }

    var token = jwt.sign({username: username}, "shhhhh");
    return res.json({
        token,
    });
});

app.get("/users", function(req,res){
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

    }
    catch(err){
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);

//  Sending Data through HTTP Server

const express = require("express");
const mongoose = require("mongoose");

const app2 = express();

app.use(express.json());

mongoose.connect("mongodb+srv://ayushpal2017ak:palAyush%4030@cluster0.asqwqga.mongodb.net/")

const User = mongoose.model('Users', { name: String, email: String, password: String});

app.post("/signup", async function(req,res){
   const username1 = req.body.username1;
   const password1 = req.body.password1;
   const name1 = req.body.name1;

   const existingUser = await User.findOne({ email: username1});

   if(existingUser){
    return res.status(400).send("Username already exists");
   }

   const user2 = new User({
    name: name1,
    email: username1,
    password: password1
   });

   user2.save();
   res.json({
    msg: "User created Successfully"
   });
})
