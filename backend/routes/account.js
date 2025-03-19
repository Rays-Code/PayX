import express from 'express'
import mongoose from 'mongoose'
import { Account, User } from '../db.js'
import authMiddleware from '../middleware.js'

const accountRouter = express.Router()

accountRouter.post('/balance', async (req, res) => {
    const body = req.body // username

    const user = await User.findOne({username: body.username})
    if(!user){
        return res.status(404).json({
            message: "User doesn't exists"
        })
    }

    const AccountUser = await Account.findOne({userId: user._id})

    if(!AccountUser){
        return res.status(404).json({
            message: "User account doesn't exist / Incorrect user details"
        })
    }

    res.status(200).json({
        balance: AccountUser.balance
    })
})


accountRouter.post('/transfer', authMiddleware, async (req, res) => {
    const session  = await mongoose.startSession()

    session.startTransaction()
    const body = req.body // to, amount
    const userId = req.userId


    if(!userId){
        await session.abortTransaction()
        return res.status(404).json({
            message: 'Invalid user'
        })
    }
    
    const userAccount = await Account.findOne({userId: userId})

    if(!userAccount || userAccount.balance<body.amount){
        return res.status(404).json({
            message: "Insufficient Balance"
        })
    }

    const receiverId = await User.findOne({_id: body.to})

    if(!receiverId){
        return res.status(404).json({
            message: "Receiver's account doesn't exists"
        })
    }
    

    await Account.updateOne({userId: userId}, {'$inc': {balance: -body.amount}})
    await Account.updateOne({userId: receiverId._id}, {'$inc': {balance: body.amount}})

    await session.commitTransaction()
    res.status(200).json({
        message: 'Transfer successful'
    })
})

export default accountRouter