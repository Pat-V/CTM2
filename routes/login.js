const express = require('express')
const jwt = require('jsonwebtoken')
const connection = require('../data/mySQL.js')
require('dotenv').config()

const router = express.Router()
      .use(express.json())
const SECRET_KEY = process.env.SECRET_KEY

router.post('/login', (req, res) => {
    const name = JSON.stringify(req.body.name)
    let dataToReturn = {}
    connection.query(`SELECT users.* FROM users WHERE (((users.name)=${name}));`, (err, data) => {

        if (err) {
            console.log(err)
            return
        } 
        
        if (data == '') {
            res.send({"userID": "Not found"})
        } else {
            for (const iterator of data) {
                dataToReturn = iterator
                break
            }
            dataToReturn.key = jwt.sign(name, SECRET_KEY)
            const key = dataToReturn.key
            connection.query(`UPDATE users SET users.key = "${key}" WHERE (((users.name)=${name}));`)
            res.send(dataToReturn)
        }
    })
})

module.exports = router