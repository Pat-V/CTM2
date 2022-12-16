const express = require('express')
require('dotenv').config()
const path = require('path')

const PORT    = process.env.PORT || 1880

const loginRoute       = require('./routes/login.js')
const CT_Route         = require('./routes/clinicalTrials.js')
const physiciansRoute  = require('./routes/physicians.js')
const patientsRoute    = require('./routes/patients.js')
const authorizedUser   = require('./routes/authorizedUser.js')

const app = express()
      .use(express.json())
      .use('/', loginRoute)
      .use('/CT', CT_Route)
      .use('/physicians', physiciansRoute)
      .use('/patients', patientsRoute)
      .use('/AddPatient', patientsRoute)
      .use('/AddPhysician', physiciansRoute)
      .use('/authorizedUser',authorizedUser)
      .use(express.static('front/build'))
      .get('/*', (_, res) =>{res.sendFile(path.join(__dirname, './front/build/index.html'))})
      .listen(PORT, () => {console.log(`Hi, server is launched on port: ${PORT}`)})








    

/*


*/
