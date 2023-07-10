const WebSocket = require('ws');

const ws = new WebSocket("ws://localhost:8080");

ws.addEventListener("open", () => {
    console.log("We are connected");
    ws.send("How are you?");
});

ws.addEventListener('message', function (event) {
    console.log(event.data);
});
