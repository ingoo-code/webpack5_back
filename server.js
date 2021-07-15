const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/api',(req,res)=>{
    res.send('hello api')
})

app.listen(3000,()=>{
    console.log(`server start port 3000`)
})

