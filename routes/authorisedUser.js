const express = require('express')
const connection = require('../data/mySQL.js')

const router = express.Router()
      .use(express.json())


router.post('/authorizedUser', (req, res) => {
    const name = JSON.stringify(req.body.name)
    const key = JSON.stringify(req.body.key)
    let dataToReturn = {}
    connection.query(`SELECT users.name, users.key FROM users WHERE (((users.name)=${name}) AND ((users.key)=${key}));`, (err, data) => {

        if (err) {
            console.log(err)
            return
        } 
        
        if (data == '') {
            res.send({"key": ""})
        } else {
            for (const iterator of data) {
                dataToReturn = iterator
                break
            }
            res.send(dataToReturn)
        }
    })
})

module.exports = router