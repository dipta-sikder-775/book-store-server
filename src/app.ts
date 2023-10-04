import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import errorHandler, { notfoundandler } from './middleware/errorHandler'
import handleValidationError from './middleware/handleMongooseValidationError'
import router from './router/router'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send({ success: true, message: 'Book Store Server Is Running' })
})
app.use('/api/v1', router)
app.use(notfoundandler)
app.use(handleValidationError)
app.use(errorHandler)



export default app
