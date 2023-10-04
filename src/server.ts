import app from './app'
import config from './config/index'
import connectDB from './config/db.config'
import dotenv from 'dotenv';


const startServer = async () => {
  await connectDB()
  app.listen(config.port, () => {
    console.log('University Server is Running On Port', config.port)
  })
}

startServer()
