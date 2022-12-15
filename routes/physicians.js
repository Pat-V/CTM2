const express = require('express')
const router = express.Router()
const connection = require('../data/mySQL.js')

router.get('/', (_, res) => {
    connection.query(`SELECT physicians.* FROM physicians;`, (err, data) => {

        if (err) {
            console.log(err)
            return
        } 
        res.json(data)
    })
})


module.exports = router