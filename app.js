import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
import connectToDatabase from './database/db.js'
import bodyParser from 'body-parser'
import BannerRouter from './router/bannerRouter.js'




const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));  // Use bodyParser for form data
app.use(BannerRouter)

connectToDatabase()
app.listen(process.env.PORT, () => {
    console.log(`app listned at ${process.env.PORT}`)
})