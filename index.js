const app = require('express')()
const http = require('http').createServer(app)


app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})

http.listen(process.env.PORT)


//Listen to any event
userSocket.on("event_name",(data)=>{
    //Perform operation on data
})

//Send message to all sockets
userSocket.broadcast.emit("event_name",data)


