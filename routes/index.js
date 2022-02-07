const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const urlSchema = require('../models/urlSchema');
const validation=require('../validators/urlValidation');

router.get('/', async (req, res) => {
    const urls=await urlSchema.find();
    res.render('index',{urls});
})

router.post('/shorten', validation,async (req, res) => {
    try {
        let {urlInput}=req.body;
        if(validUrl.isUri(urlInput)){
            let urlExist=await urlSchema.findOne({longUrl:urlInput});
            if(urlExist)res.redirect('/');
            else{
                const newUrl =await new urlSchema({ longUrl: urlInput });
                await newUrl.save();
                res.redirect('/');
            }
        }
    } catch (error) {
        console.log(error);
        res.redirect('404');
    }
})

router.get('/:shortUrl', async (req, res) => {
    const url = urlSchema.findOne({ shortUrl: req.params.shortUrl });
    if (url == null) return res.sendStatus(404);
    res.redirect(url.longUrl);
});

router.get('/delete/:id',async(req,res)=>{
    await urlSchema.findByIdAndRemove(req.params.id);
    res.redirect('/');
})


module.exports = router;