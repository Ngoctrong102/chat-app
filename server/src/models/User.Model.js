var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    avatar: { type: String, default: 'avt-default.jpg' }
})


module.exports = mongoose.model('User', UserSchema);