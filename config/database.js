const mongoose = require('mongoose');

const db_Uri = 'mongodb://localhost/shortUrl';

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            db_Uri, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
            (err) => {
                if (err) console.log(err);
                else console.log('Connect to database!');
            })
    }
    connect();
}
