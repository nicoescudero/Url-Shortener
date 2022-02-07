const {body} =require('express-validator');
const validateResult=require('../helpers/validation');
const validation=[
    body('urlInput','Insert a URL').exists().notEmpty().isURL(),
    (req,res,next) => {
        validateResult(req,res,next);
    }
];

module.exports=validation;
