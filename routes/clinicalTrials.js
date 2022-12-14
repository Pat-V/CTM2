const express = require('express')
const router = express.Router()
const trials = require('../data/trials.json')

router.get('/', (_, res) => {res.json(trials)})

router.post('/CT'), (req, res) => {
    console.log(req.body.name.replace(':',''))    
}


module.exports = router
