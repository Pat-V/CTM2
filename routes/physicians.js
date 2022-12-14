const express = require('express')
const router = express.Router()
const physicians = require('../data/physicians.json')


router.get('/', (_, res) => {res.json(physicians)})


module.exports = router