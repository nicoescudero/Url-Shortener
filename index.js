const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dataBase = require('./config/database');
const app = express();
//start database
dataBase();
//settings server
app.set('port', process.env.PORT || 3000);
//template engine configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Middlewares
app.use(morgan('dev'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }))
app.use((req,res,next)=>{
    app.locals.messageError='';
    next();
})
//static files
app.use('/public', express.static(path.join(__dirname, 'public')));
//configure routes
app.use('/', require('./routes'))

//listening server
app.listen(app.get('port'), () => console.log(`server on port ${app.get('port')}`));