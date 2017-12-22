#!/usr/bin/env nodejs

require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT
const bodyParser = require('body-parser')
const fs = require('fs')
const uuidv4 = require('uuid/v4')
const { Client } = require('pg')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit: '5mb'}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/images', (req, res) => {
    const client = new Client({
        database: process.env.DATABASE,
        host: process.env.HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.DBPORT
    })

    client.connect()

    client.query('SELECT image FROM complaints')
    .then(result => {
        res.render('images', {images: result.rows})
    })
    .catch(err => console.log(err))
})

app.post('/mylife', (req, res) => {
    console.log('reached')
    const client = new Client({
        database: process.env.DATABASE,
        host: process.env.HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.DBPORT
    })

    client.connect()

    var base64Data = req.body.data.replace(/^data:image\/png;base64,/, "");

    var name = uuidv4()

    fs.writeFile(`public/images/${name}.png`, base64Data, 'base64', function(err) {
        if (err) console.log(err)
    })

    client.query(`INSERT INTO complaints (name, postcode, image, email) VALUES ('Döner masters', '1077 VS', '${name}', 'lookatmesnitching@gmail.com')`)
    .catch(err => console.log(err))

    res.render('snitch')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
