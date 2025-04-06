const express = require('express');
const app = express();
const http = require("http");
const path = require('path');

const socketio = require('socket.io'); // Correct variable name

const server = http.createServer(app);

const io = socketio(server); // Correct usage

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
//every value in (socket) is unique
    socket.on("send-location",  (data) => {
        console.log(`Received Location from ${socket.id}:`, data) //using socket we accept send-location on the backend
        io.emit("receive-location",{id: socket.id, ...data}) //using io.emit we send data from backend to all the connected person/device
    }) // ...data -> using spread to get all the data available
        // Handle user disconnection
        socket.on("disconnect", function(){
            io.emit("user-disconnected", socket.id);
        });
})





app.get('/', (req, res) => {
    res.render('index');
});

server.listen(PORT, () => {
    console.log(`Server is Successfully Running, and App is listening on port http://localhost:${PORT}`);
});


