import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authMiddleware = async (req, res, next) => {
    const authorization = req.headers['authorization']


    if(!authorization && authorization.startsWith('Bearer ')){
        return res.status(403).json({})
    }

    const token = authorization.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(decoded.userId){
            req.userId = decoded.userId
            next()
        }
    } catch (error) {
        res.status(403).json({})
    }
}

export default authMiddleware