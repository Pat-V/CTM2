const express = require('express')
const fs = require('fs')
const router = express.Router()
const patients = require('../data/patients.json')


router.get('/',   (_, res) => {res.json(patients)})

router.post('/', (req, res) => {
    newRecord = req.body.data
    console.log("Hello backend")
    //search for an available new id
    let newID = -1
    for (const iterator of patients) {
        if (Number(iterator.id) > newID){
            newID = iterator.id
        }
    }
    newID++
    newRecord.id = newID
    
    // add the new record
    let patientsTable = './data/patients.json';
    let patientList = JSON.parse(fs.readFileSync(patientsTable, "utf-8"))
    patientList.push(newRecord)
    fs.writeFileSync(patientsTable, JSON.stringify(patientList))
    console.log(patients)
    res.send({Status: "Patient added"})
})



module.exports = router