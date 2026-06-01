const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))       // http://127.0.0.1:3000/publicFile.txt

// app.get or app.post or app.putor app.delete (path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('This is the about section of the webpage.')
})
app.get('/contact', (req, res) => {
    res.send('The contact information is mention here.')
})
app.get('/home', (req, res) => {
    res.send('This is the home page of the webapp.')
})
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from db
    // console.log(req)

    // url: http://127.0.0.1:3000/blog/java?mode=dark&regin=in
    console.log(req.params)     // output: { slug: 'java' }
    console.log(req.query)      // output: { mode: 'dark', regin: 'in' }
    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})