var UserService = require('../../services/User.Service');
module.exports = socket => {
    socket.on("ACCEPT_REQ_FRIEND", (data) => {
        UserService.addFriend(data.from, data.to);
        // accept_req_friend(socket, data);
    })
}