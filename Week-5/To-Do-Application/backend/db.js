/*
ToDo {
  title : string,
  description: string,
  completed: boolean
}
*/
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ayushpal2017ak:palAyush%4030@cluster0.asqwqga.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
