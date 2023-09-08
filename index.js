const express = require('express')
const app = express()
const mongoose = require('mongoose');

const router = require('./routes/ToDoRoute')

require('dotenv').config()

app.use(express.json())



mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)
})
 app.use(router)
 


 const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log('server is running')
})