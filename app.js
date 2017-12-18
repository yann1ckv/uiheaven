const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/postImage', (req, res) => {
    console.log(req.body.data)
    res.send('hi')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
