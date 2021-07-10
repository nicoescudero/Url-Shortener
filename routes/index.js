const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortID = require('shortid');

router.get('/', (req, res) => res.render('index'))//render template engine

router.post('/urlc', (req, res) => {
    var urlBase = "http://localhost:3001/";
    var urlLong = req.body.urlInput;

    //create url code
    var urlCode = shortID.generate();
    //check long url

    if (validUrl.isUri(urlLong)) {
        var shortUrl = urlBase + urlCode
        console.log(`url: ${shortUrl}`);
    }

    res.render('index', {
        shortUrll: urlLong
    });
})

module.exports = router;