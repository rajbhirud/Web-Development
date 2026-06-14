import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

await client.connect();

const db = client.db("webDevelopment");
const users = db.collection("users");

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', async (req, res) => {
    try {
        const userData = req.body;

        const result = await users.insertOne(userData);

        console.log("Inserted:", result.insertedId);

        res.json({
            success: true,
            message: "User saved successfully"
        });
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to save user"
        });
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})