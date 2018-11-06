const { Router } = require('express')
const controller = require('../controllers/like')
const router = Router()

router.post('/:id', controller.like)

module.exports = router
