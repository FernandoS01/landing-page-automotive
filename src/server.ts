import express from 'express'
import routes from './../src/Routes/routes'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();


const app = express()
app.use(routes)
app.use(cors())

app.listen(process.env.PORT || 3333,()=>{
  console.log("Server running")
})