const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

// Middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.name = "Raj"
    console.log(`LOGGED in m1 on ${Date.now()} and this is a ${req.method} ${req.url}`);
    // res.send("hacked by middleware 1")
    next()
})
// Middleware 2
app.use((req, res, next) => {
    console.log("LOGGED in m2");
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send(`Hello ${req.name}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})