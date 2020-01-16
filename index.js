// code away!
require('dotenv').config();

const express = require('express')
const server = express()
const logger = require('./middleware/logger')
const welcomeRouter = require('./routers/welcome')
const userRouter = require('./users/userRouter')

server.use(logger())

server.use(express.json())
const port = process.env.PORT;

server.use('/', welcomeRouter)
server.use('/users', userRouter)

server.listen(port, ()=>{
    console.log(`\n*** Server listening on ${port}***\n`);
})