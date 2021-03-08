const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);

const PORT = process.env.PORT || 8888;

// app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());

app.post('/user', (req, res) => {
    console.log(req.body);
    res.json({ code: 200, user: "nef" })
})

app.post('/user/login', (req, res) => {
    console.log(req.body);
    res.json({ user: 123, token: 456 })
})

server.listen(PORT, () => {
    console.log('Listening at port ' + PORT);
})