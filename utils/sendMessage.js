const agent = require('superagent')
const access_token = '<ACCESS_TOKEN>'

function sendMessage(sender, text) {
    agent
        .post(`https://graph.facebook.com/v2.6/me/messages?access_token=${access_token}`)
        .send({
            "recipient": {
                "id": sender
            },
            "message": {
                "text": text
            }
        })
        .set('Accept', 'application/json')
        .end((err, res) => {
        if (err) {
            console.log(err)
        } else if (res.body.error) {
            console.log(res.body.error)
        }
    })
}

module.exports = sendMessage