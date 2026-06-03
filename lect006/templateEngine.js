const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile("templates/templateEngine.html", { root: __dirname })
})

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "JavaScript"
    let blogSearch = "search: JavasSript"
    let arr = ["java", "python", "c++"]
    res.render("templateEngine", { blogTitle: blogTitle, blogSearch: blogSearch, arr })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})