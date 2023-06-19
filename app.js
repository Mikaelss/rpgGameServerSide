const express = require('express')
const port = 8080

app = express()

app.get('/', function(req,res){
        res.sendFile(`${__dirname}/public`)
})

app.listen(port, function(){
    console.log(`Server is running at ${port}`)
})