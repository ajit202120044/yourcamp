const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
  useNewUrlParser:true,
  useFindAndModify:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).then(()=> console.log("DB CONNECTED"))
.catch(err => console.log("DB CONNECTION ERROR :",err))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors())
// app.use(app.routesUrls);
// routesUrls.initialize(app);
app.use('/app',routesUrls)
app.listen(4000,()=> console.log("server is up and running"))