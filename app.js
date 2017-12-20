#!/usr/bin/env nodejs

const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')
const fs = require('fs')
const uuidv4 = require('uuid/v4')

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit: '5mb'}))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/postImage', (req, res) => {

    var base64Data = req.body.data.replace(/^data:image\/png;base64,/, "");

    fs.writeFile(`images/${uuidv4()}.png`, base64Data, 'base64', function(err) {
        if (err) console.log(err)
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
