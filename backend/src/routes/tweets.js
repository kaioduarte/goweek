const { Router } = require('express')
const controller = require('../controllers/tweet')
const router = Router()

router.get('/', controller.getAll)
router.post('/', controller.create)

module.exports = router
