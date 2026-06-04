import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {type: String, required: true, default: "Default value"},
    desc: String,
    isDone: Boolean
});

export const Todo = mongoose.model("Todo", TodoSchema);