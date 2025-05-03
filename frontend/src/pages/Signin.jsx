import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import Logo from '../components/Logo'

const Signin = () => {

    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/dashboard'); // Redirect logged-in users to Dashboard
      }
    }, [])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const shouldNavigate = !username.trim() || !password.trim()

  const POST = async () => {
    if(shouldNavigate){
      alert('All fields are required!')
    }
    else{
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/api/v1/user/signin`, {
      username,
      password
    })
    if(!response.data.token){
      localStorage.setItem("token", response.data.token)
      navigate('/dashboard')
    } else{
      alert("User doesn't exists")
    }
 
    }
  }
  



  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black to-gray-800 relative overflow-hidden">
        <div className='h-14 flex justify-between' onClick={() => navigate('/')}>
        <div className='flex flex-col justify-center cursor-pointer h-full m-5 mt-7 text-5xl text-white font-bold'>
            <Logo />
        </div>
        </div>

        <div className='h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg'>
                <Heading label={'Sign in'}/>
                <SubHeading label={'Enter your credentials to access your account'}/>
                <InputBox onChange={e => {
                  setUsername(e.target.value)
                }} value={username} label={'Email'} placeholder={'john@gmail.com'}/>
                <InputBox onChange={e => {
                  setPassword(e.target.value)
                }} value={password} label={'Password'} placeholder={'1234556'}/>
                <div className='mt-4'>
                    <Button func={POST} to={shouldNavigate? 'signin': 'dashboard'} tColor={'white'} bColor={'black'} label={'Sign in'}/>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={'Sign up'} to={'/signup'}/>
            </div>  
        </div>

    </div>
    </div>

  )
}

export default Signin