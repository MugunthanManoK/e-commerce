const express=require('express')
const cors=require('cors')

PORT=2020

const app=express()
app.use(express.json())
app.use(cors())




app.listen(PORT,()=>{
    console.log(`Server runnin on http://localhost:${PORT}`)
})