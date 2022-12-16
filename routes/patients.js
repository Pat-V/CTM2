const fs = require('fs')
const express = require('express')
const router = express.Router()
const connection = require('../data/mySQL.js')
const patients = require('../data/patients.json')

router.get('/', (_, res) => {
    connection.query(`SELECT patients.* FROM patients;`, (err, data) => {
        if (err) {
            console.log(err)
            return
        } 
        res.json(data)
    })
})


router.post('/', (req, res) => {
    newRecord = req.body.data

    connection.query(`INSERT INTO ctm.patients ( firstName, lastName, age, weight ) SELECT "${newRecord.firstName}" AS Expr1, "${newRecord.lastName}" AS Expr2, "${newRecord.age}" AS Expr3, "${newRecord.weigh}" AS Expr4;`), (err, data) => {
        if (err) {
            console.log(err)
            return
        } 
        res.send({Status: "Patient added"})
    }
})


module.exports = router