import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/webDevelopment")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({title: "First", desc: "This is the first todo item", isDone: false})
    todo.save()
    res.send('Hello World!')
})
app.get('/default', (req, res) => {
    const todo = new Todo({ desc: "This is the first todo item", isDone: false})
    todo.save()
    res.send('Hello Default!')
})
app.get('/getDB', async (req, res) => {
    let todo = await Todo.findOne({})
    // res.json(todo)
    res.json({ title: todo.title, desc: todo.desc })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})