const express = require("express");
var http = require("http");
const app = express();
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
const port = process.env.PORT || 5000;
server.listen(port, () => {
});