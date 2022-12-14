const express = require('express')
const mySQL = require('mysql2')
require('dotenv').config()

const PORT = process.env.PORT || 1880

const loginRoute =      require('./routes/login.js')
const CT_Route =        require('./routes/clinicalTrials.js')
const physiciansRoute = require('./routes/physicians.js')
const patientsRoute =   require('./routes/patients.js')




let dbConf = {
    host: "192.168.1.39",
    user: "root",
    password: "MS830nol",
    database: 'CTM',
    port: '3366'
}
let connection = mySQL.createConnection(dbConf)
console.log("we are connected")



const app = express()
      .use(express.json())
      .use('/', loginRoute)
      .use('/CT', CT_Route)
      .use('/physicians', physiciansRoute)
      .use('/patients', patientsRoute)
      .use('/AddPatient', patientsRoute)
      .listen(PORT, () => {console.log(`Hi, server is launched on port: ${PORT}`)})








    

/*
const path = require('path')
app.use(express.static('front/build'))
app.get('/*', (_, res) =>{
    res.sendFile(path.join(__dirname, './front/build/index.html'))
})
*/
