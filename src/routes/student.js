const express = require('express')
const router = express.Router();


router.get('/getStudent', (req, res) => {
    res.send('student dbcc')
})

module.exports = router;
