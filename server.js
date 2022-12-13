const express = require('express')
const jwt = require('jsonwebtoken')
const fs = require('fs')
require('dotenv').config()


const users = require('./data/users.json')
const trials = require('./data/trials.json')
const physicians = require('./data/physicians.json')
const patients = require('./data/patients.json')

const PORT = process.env.PORT || 1880
const SECRET_KEY = process.env.SECRET_KEY

const app = express()
      app.use(express.json())
      app.listen(PORT, () => {console.log(`Hi, server is launched on port: ${PORT}`)})

app.get('/login:name', (req, res) => {
    let dataToReturn = []
    for (const iterator of users) {
        if (iterator.name  === req.params.name.replace(':','')){
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

app.post('/CT:id'), (req, res) => {
    console.log(req.params.name.replace(':',''))    
}

app.get('/CT',         (_, res) => {res.json(trials)})
app.get('/Physicians', (_, res) => {res.json(physicians)})

app.get('/Patients',   (_, res) => {res.json(patients)})

app.post('/AddPatient', (req, res) => {
    newRecord = req.body.data

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
    

/*
const path = require('path')
app.use(express.static('front/build'))
app.get('/*', (_, res) =>{
    res.sendFile(path.join(__dirname, './front/build/index.html'))
})
*/
