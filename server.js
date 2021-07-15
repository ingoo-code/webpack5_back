const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/api',(req,res)=>{
    res.json(
        [
            {userid: "web7722", content: '#서버', date: "2021-07-10" },
            {userid: "web7722", content: '#성공적', date: "2021-07-10" },
            {userid: "web7722", content: '#힘듬..', date: "2021-07-10" },
        ]
    )
})

app.listen(3000,()=>{
    console.log(`server start port 3000`)
})

