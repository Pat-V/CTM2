const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()
const users = require('../data/users.json')
const SECRET_KEY = process.env.SECRET_KEY

router.post('/login', (req, res) => {
    let dataToReturn = []
    for (const iterator of users) {
        if (iterator.name  === req.body.name.replace(':','')){
            dataToReturn = iterator
            break
        }
    }
    if (dataToReturn.length === 0) {
        res.send({"userID": "Not found"})
    } else {
        dataToReturn["key"] = jwt.sign(dataToReturn, SECRET_KEY)
        res.json(dataToReturn)
    }
})

module.exports = router


