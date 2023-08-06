const express = require('express')
const router = express.Router();
const userController = require('../controllers/UserController')

router.post('', userController.create)
router.get('/:id', userController.get)
router.get('',userController.list)


module.exports = router;