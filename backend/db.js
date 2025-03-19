import mongoose from 'mongoose';
import { Schema } from 'mongoose'
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
    console.log('DB successfully connected.')
})

const UserSchema  = mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    password:String
})

export const User = mongoose.model('user', UserSchema)

const AccountSchema = mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required:true
    },
    balance:{
        type:Number,
        required:true,
        validate:{
            validator:Number.isInteger,
            message: "Balance must be an integer."
        }
    }
})

export const Account = mongoose.model('account', AccountSchema)

