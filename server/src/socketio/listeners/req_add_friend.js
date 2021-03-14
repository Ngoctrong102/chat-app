var { req_add_friend } = require('../events');
module.exports = socket => {
    socket.on("REQ_ADD_FRIEND", (data) => {
        // console.log(`${data.from} muốn kết bạn với ${data.to}`)
        req_add_friend(socket, data);
    })
}