const express = require('express')
const http = require('http')
const port = 8080

app = express()
server = http.createServer(app)

app.use(express.static('public'))

server.listen(port, function(){
    console.log(`Server is running at ${port}`)
})