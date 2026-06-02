const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("get request");
    res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log("post request");
    res.send('This is a post request.')
})

app.get('/index', (req, res) => {
    console.log("get request: index.html");
    res.sendFile("templates/index.html", {root: __dirname})
})
app.get('/api', (req, res) => {
    res.json({a:1, b:2, c:5, d:99})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})