// const { Client, GatewayIntentBits } = require('discord.js');
require("dotenv").config();

const fs = require('fs/promises');

const WebSocket = require('ws')
const WebSocketServer = WebSocket.WebSocketServer;

const files = ["parsedData.json","parsedData.json","parsedData.json","parsedData.json","parsedData.json","parsedData.json"]

const wss = new WebSocketServer({ port: 8080 });

function foo(ws, index,jsdata, lcchannel){
    
    var rs = {
        content: jsdata["comments"][index]["message"],
        username: jsdata["comments"][index]["name"],
        channel: lcchannel
    }
    ws.send(JSON.stringify(rs));
    index++;
    if(index<jsdata["comments"].length){
        setTimeout(e=>{
            foo(ws, index, jsdata, lcchannel)
        }, 500+(Math.random()*1000))
    }

}


wss.on('connection', function connection(ws) {
    console.log("We are connected");
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });

    fs.readFile(files[0])
    .then(data => {
        var jsdata = JSON.parse(data)
        var index = 0;
        setTimeout(e=>{
            foo(ws, index, jsdata, "a")
        }, 500+Math.random()*500)
    })
    .catch((error) => {
        console.error(error);
        // Do something if error 
    });

    fs.readFile(files[1])
    .then(data => {
        var jsdata = JSON.parse(data)
        var index = 0;
        setTimeout(e=>{
            foo(ws, index, jsdata, "b")
        }, 500+Math.random()*500)
    })
    .catch((error) => {
        console.error(error);
        // Do something if error 
    });

    fs.readFile(files[2])
    .then(data => {
        var jsdata = JSON.parse(data)
        var index = 0;
        setTimeout(e=>{
            foo(ws, index, jsdata, "c")
        }, 500+Math.random()*500)
    })
    .catch((error) => {
        console.error(error);
        // Do something if error 
    });


    fs.readFile(files[3])
    .then(data => {
        var jsdata = JSON.parse(data)
        var index = 0;
        setTimeout(e=>{
            foo(ws, index, jsdata, "d")
        }, 500+Math.random()*500)
    })
    .catch((error) => {
        console.error(error);
        // Do something if error 
    });

    fs.readFile(files[4])
    .then(data => {
        var jsdata = JSON.parse(data)
        var index = 0;
        setTimeout(e=>{
            foo(ws, index, jsdata, "e")
        }, 500+Math.random()*500)
    })
    .catch((error) => {
        console.error(error);
        // Do something if error 
    });

    fs.readFile(files[5])
    .then(data => {
        var jsdata = JSON.parse(data)
        var index = 0;
        setTimeout(e=>{
            foo(ws, index, jsdata, "f")
        }, 500+Math.random()*500)
    })
    .catch((error) => {
        console.error(error);
        // Do something if error 
    });

  });

