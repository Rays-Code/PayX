import express from 'express'
import zod from 'zod'
import mongoose from 'mongoose'
import { User, Account } from '../db.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import authMiddleware from '../middleware.js'

dotenv.config()

const userRouter = express.Router()

const signupSchema = zod.object({
    username:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
})

userRouter.post('/signup', async (req, res) => {
    const body = req.body   
    const {success} = signupSchema.safeParse(body)

    if(!success){
        return res.json({
            message: 'Invalid input data'
        })
    }

    const user = await User.findOne({
        username:body.username
    })
    if(user){
        return res.json({
            message: 'Username already taken'
        })
    }

    const dbUser = await User.create(body)

    // Creating bank accounts
    await Account.create({
        userId:dbUser._id,
        balance:Math.floor(Math.random()*10000)
    })


    const token = jwt.sign({
        userId:dbUser._id
    }, process.env.JWT_SECRET)

    res.status(200).json({
        message: 'User created successfully',
        token:token
    })
})




userRouter.post('/signin', async (req, res) => {
    const body = req.body //username password

    const user = await User.findOne({username: body.username, password:body.password})

    if(!user){
        return res.json({
            message: "User doesn't exists"
        })
    }

    const token = jwt.sign({
        userId:user._id
    }, process.env.JWT_SECRET)


    res.status(200).json({
        token: token
    })
})

const updateBody = zod.object({
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
})

userRouter.put('/update', authMiddleware, async (req, res) => {
    const body = req.body

    const {success} = updateBody.safeParse(body)
    if(!success){
        return res.status(411).json({
            message: 'Error while updating information'
        })  
    }

    await User.updateOne({username:body.username}, body)

    res.json({
        message: 'Updated successfully'
    })
})





userRouter.get('/bulk', async (req, res) => {
    const filter = req.query.filter || ''

    const users = await User.find({
        '$or'   :[
            {firstName: {'$regex': filter, '$options': 'i'}},
            {lastName: {'$regex': filter, '$options': 'i'}}
        ]
    })

    res.status(200).json({
        users: users.map(user => ({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            id:user._id
        }))
    })
})

userRouter.get('/info', async (req, res) => {
    const authHeader = req.headers['authorization']

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "JWT must be provided" });
    }

    const token = authHeader.split(' ')[1];


    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const isValid = mongoose.isValidObjectId(decoded.userId);
     if (!isValid) {
       return res.status(404).json({
        message: 'Invalid JWT Id'
       })
    }

    const dbUserName = await User.findById(decoded.userId)
    const account = await Account.findOne({userId: decoded.userId})

    res.status(200).json({
        user: dbUserName,
        balance: account.balance
    })
})

export default userRouter;
