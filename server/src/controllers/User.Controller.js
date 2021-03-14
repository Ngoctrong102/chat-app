const jwt = require('jsonwebtoken');

const UserService = require('../services/User.Service');

const SECRET_CODE = 'AHIHI';

module.exports = {
    signUp: (req, res) => {
        try {
            var { email, username, password, repass } = req.body;
            if (password !== repass) {
                return res.json({ status: "Error", message: "Re-Pass and Password are not same!" })
            }
            var user = UserService.signUp(email, username, password);
            if (user) {
                var userData = {
                    _id: user._id,
                    username: user.username,
                    avatar: user.avatar
                };
                return res.json({
                    _id: user._id,
                    user: userData,
                    token: jwt.sign(userData, SECRET_CODE)
                });
            }

        } catch (err) {
            console.log(err);
        }
    },
    login: async(req, res) => {
        try {
            var { email, password } = req.body;
            var user = await UserService.login(email, password);
            if (user) {
                var userData = {
                    _id: user._id,
                    username: user.username,
                    avatar: user.avatar
                };
                return res.json({
                    user: userData,
                    token: jwt.sign(userData, SECRET_CODE)
                })
            } else {
                res.json({ status: "Error", message: "Email or password is incorect" });
            }
        } catch (err) {
            console.log(err);
        }
    },
    fetchInfor: async(req, res) => {
        try {
            var userData = jwt.decode(req.body.token, SECRET_CODE);
            var user = await UserService.findUser(userData);

            if (user) {
                var userData = {
                    _id: user._id,
                    username: user.username,
                    avatar: user.avatar
                };
                return res.json({
                    user: userData,
                })
            } else {
                return res.json({
                    status: "Error",
                    message: "User is not exist"
                })
            }
        } catch (err) {
            res.json({ status: "Error", message: "Invalid token!" })
        }
    },
    updateProfile: async(req, res) => {
        try {
            var userData = {...req.body };
            var respone = await UserService.updateProfile(req.user._id, userData);
            if (respone.ok) res.json({ user: userData });
            else return res.json({ status: "Error", message: "Database error!" });
        } catch (err) {
            console.log(err);
        }
    },
    searchFriends: async(req, res) => {
        try {
            var listUser = await UserService.searchFriends(req.query.keyword);
            res.json({ listUser });
        } catch (err) {
            console.log(err);
            res.json({ err: "Error!" })
        }
    }
}