const express = require('express');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');

const app = express();
const server = require('http').createServer(app);

const db = require('./src/config/database');
const parseUser = require('./src/middleware/parseUser');

global.__basedir = __dirname;

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
io.use(function(socket, next) {
    if (socket.handshake.auth && socket.handshake.auth.token) {
        try {
            var user = jwt.decode(socket.handshake.auth.token, 'ahihi');
            socket.user = user;
            next();
        } catch (err) {
            return next(new Error('Authentication error'));

        }
    } else {
        next(new Error('Authentication error'));
    }
});

require('./src/socketio/listeners')(io);


const PORT = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use(parseUser);

app.use('/user', require('./src/routes/user.router'))

server.listen(PORT, () => {
    console.log('Listening at port ' + PORT);
})