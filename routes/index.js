const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'))//render template engine

router.post('/urlc', (req, res) => {
    console.log('ACA!');
    const variable = req.body.urlInput;
    console.log(variable);
})

module.exports = router;