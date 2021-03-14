const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chat-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log("Connect database successfully")
    })
    .catch(err => {
        console.error(err);
    });

module.exports = mongoose.connection;