import express from 'express'
import mainRouter from './routes/index.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: `${import.meta.env.FRONTEND_URL}`
}))

app.use('/api/v1', mainRouter)

// Routes: 
// /api/v1/user
// /api/v1/account






app.listen(3000, () => console.log('Server running on PORT 3000'))