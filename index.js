
const express = require("express");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World, Ayush Here")
})


app.get("/route-handler", (req,res) => {
    res.json({
        name: "Ayush Kumar",
        age: "21"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

