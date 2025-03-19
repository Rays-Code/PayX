import express from 'express'
import userRouter from './user.js'
import accountRouter from './account.js'

const mainRouter = express.Router()

mainRouter.use('/user', userRouter)
mainRouter.use('/account', accountRouter)

export default mainRouter