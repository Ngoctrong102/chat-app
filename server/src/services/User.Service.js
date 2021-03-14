const { hashPassword, checkPassword } = require('../helpers/hashPassword');
var User = require('../models/User.Model');
class UserService {
    signUp(email, username, password) {
        password = hashPassword(password);
        var user = new User({ email, username, password });
        user.save();
        return user;
    }
    async login(email, password) {
        var user = await User.findOne({ email }).exec();
        if (user && checkPassword(password, user.password)) return user;
        else return null;
    }
    async findUser(userData) {
        var user = await User.findOne({ _id: userData._id }).exec();
        if (user) return user;
        else return null;
    }
    async updateProfile(userID, userData) {
        var respone = await User.updateOne({ _id: userID }, { usename: userData.username, avatar: userData.avatar });
        return respone;
    }
    async searchFriends(keyword) {
        var regex = new RegExp(keyword, 'i');
        var listUser = await User.find({
            $or: [
                { username: regex },
                { email: regex }
            ]
        }, {
            username: 1,
            avatar: true
        });
        return listUser;
    }
}

module.exports = new UserService();