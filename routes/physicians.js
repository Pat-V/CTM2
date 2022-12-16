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

router.post('/', (req, res) => {
    newRecord = req.body.data

    connection.query(`INSERT INTO ctm.physicians ( firstName, lastName ) SELECT "${newRecord.firstName}" AS Expr1, "${newRecord.lastName}" AS Expr2;`), (err, data) => {
        if (err) {
            console.log(err)
            return
        } 
        res.send({Status: "Physician added"})
    }
})



module.exports = router