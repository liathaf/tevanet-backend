const express = require('express')
const router = express.Router()
const { sendMail } = require('./contact.controller')




router.post('/', sendMail)


module.exports = router