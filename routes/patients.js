const express = require('express')
const router = express.Router()
const connection = require('../data/mySQL.js')

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