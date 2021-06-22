const express = require("express");
var http = require("http");
const app = express();
const port = 5000;
var server = http.createServer(app);
var io = require("socket.io")(server);

//middlewre
app.use(express.json());
var data ;

io.on("connection", (socket) => {

  socket.on("message", (msg) => {
    data = msg;
  });
  socket.on("receiver", ()=>{
    socket.emit("message", data);
  });
});

server.listen(port, "0.0.0.0", () => {
});