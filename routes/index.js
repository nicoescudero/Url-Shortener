const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const urlSchema = require('../models/urlSchema');


router.get('/', async (req, res) => {
    const urls = await urlSchema.find();
    const url = urls[urls.length - 1]
    console.log(url.shortUrl);
    res.render('index', { Url: url })
})//render template engine

router.post('/shorten', async (req, res) => {
    await urlSchema.create({ longUrl: req.body.urlInput });
    res.redirect('/');
})

router.get('/:shortUrl', async (req, res) => {
    const url = urlSchema.findOne({ shortUrl: req.params.shortUrl });
    if (url == null) return res.sendStatus(404);
    res.redirect(url.longUrl);
});

module.exports = router;