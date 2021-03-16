var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    avatar: { type: String, default: 'avt-default.jpg' },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    reqFriends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})


module.exports = mongoose.model('User', UserSchema);