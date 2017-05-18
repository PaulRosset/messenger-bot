const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const app = express()

const sendmsg = require('./utils/sendMessage.js')
const command = require('./utils/request.js')

app.set('port', 5000)

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Chat Bot Homepage')
})

app.get('/webhook/', function (req, res) {
   if (req.query['hub.verify_token'] === '<TOKEN_U_CHOOSE>') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Invalid Token')
});

app.post('/webhook/', function (req, res) {

    const data = req.body
    const message = data.entry[0].messaging[0].message.text
    const sender = data.entry[0].messaging[0].sender.id

    _.forEach(command.request, (value, key) => {
        if (_.lowerCase(message) === key) {
            sendmsg(sender, value)
        }
    })
    res.sendStatus(200)
});

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})
