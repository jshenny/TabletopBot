// const { Client, GatewayIntentBits } = require('discord.js');
require("dotenv").config();

const fs = require('fs/promises');

const WebSocket = require('ws')
const WebSocketServer = WebSocket.WebSocketServer;

const files = ["parsedData.json","parsedData.json","parsedData.json","parsedData.json","parsedData.json","parsedData.json"]

const wss = new WebSocketServer({ port: 8080 });


// let r = (Math.random() + 1).toString(36).substring(7);
// console.log("random", r);


function randomchannel(){
    var channels = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    var count = Math.floor(Math.random()*6)
    return channels[count]
}

function foo(ws){
    let r = (Math.random() + 1).toString(36).substring(7);
    var lcchannel = randomchannel()
    var rs = {
        content: lcchannel,
        username: r,
        channel: lcchannel
    }
    ws.send(JSON.stringify(rs));
    // index++;
    // if(index>=jsdata["comments"].length){
    //     index = 0;
    // }
    setTimeout(e=>{
        foo(ws)
    }, 500+(Math.random()*500))
    

}


wss.on('connection', function connection(ws) {
    console.log("We are connected");
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
        var rs = {
            content: "!poll",
            username: "me",
            channel: "lcchannel"
        }
        ws.send(JSON.stringify(rs));
        setTimeout(e=>{
            foo(ws)
        }, 500+(Math.random()*500))

  });

