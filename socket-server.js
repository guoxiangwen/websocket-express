var io = require('socket.io')();
io.sockets.on("connection", (socket) => {
    console.log("socket is listen on..........")
        //监听用户发布聊天内容
    socket.on('msg', (obj) => {
        console.log(obj)
    })
    socket.emit('fuck', { text: 'fuck you' })
});
exports.listen = function(_server) {
    return io.listen(_server);
};