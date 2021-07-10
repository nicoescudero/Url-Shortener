const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dataBase = require('./config/database');
const app = express();
//settings server
app.set('port', process.env.PORT || 3001);
//Middlewares
app.use(morgan('dev'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }))
//template engine configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//static files
app.use('/public', express.static(path.join(__dirname, 'public')));
//configure routes
app.use('/', require('./routes'))

//start database
dataBase();

//listening server
app.listen(app.get('port'), () => console.log(`server on port ${app.get('port')}`));