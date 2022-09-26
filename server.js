require('dotenv').config()
var express = require("express")
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const MongoClient = require('mongoDb').MongoClient;
var cors = require('cors')
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");
let userRoute = require("./routes/userRoutes");

//let http = require('http').createServer(app)
//const io = require('socket.io')(http);
//const socket = io();


//project model
//let projectModel = require("../models/project")

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//sockets

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
    setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);
});

//routes
app.use('/api/projects',projectRoutes)

app.use('/api/user',userRoute)


var port = process.env.port || 3000;

server.listen(port,()=>{
    console.log("App listening to: "+port)
   // createColllection('Books')
   // createUserColllection('Users')
})


