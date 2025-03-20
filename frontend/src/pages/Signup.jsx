import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signup = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard'); // Redirect logged-in users to Dashboard
    } 
  }, [])

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const shouldNavigate = !firstName.trim() || !lastName.trim() || !username.trim() || !password.trim()

  const POST = async () => {

    if(shouldNavigate) {
      alert('All fields are required!')
      return;
    } 
    else {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/api/v1/user/signup`, {
        firstName,
        lastName,
        username,
        password
      })
      localStorage.setItem("token", response.data.token)
    }
  }


  return (
    <div className="h-full bg-[url('/assets/4864051.jpg')] bg-cover">

        <div onClick={() => navigate('/')} className='h-14 flex justify-between'>
        <div className='flex flex-col justify-center cursor-pointer h-full ml-6 mt-4 text-5xl text-white font-bold'>
            PayEase
        </div>
        </div>

        <div className='h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg'>
                <Heading label={'Sign up'}/>
                <SubHeading label={'Enter your information to create your account'}/>
                <InputBox onChange={e => {
                  setfirstName(e.target.value)
                }} value={firstName} label={'First Name'} placeholder={'John'}/>
                <InputBox onChange={e => {
                  setlastName(e.target.value)
                }} value={lastName} label={'Last Name'} placeholder={'Doe'}/>
                <InputBox onChange={e => {
                  setUsername(e.target.value)
                }} value={username} label={'Email'} placeholder={'john@gmail.com'}/>
                <InputBox onChange={e => {
                  setPassword(e.target.value)
                }} value={password} label={'Password'} placeholder={'123456'}/>
                <div className='pt-4'>
                    <Button to={shouldNavigate? 'signup': 'dashboard'} func={POST} tColor={'white'} bColor={'black'} label={'Sign up'}/>
                </div>
                <BottomWarning label={'Already have an account?'} buttonText={'Sign in'} to={'/signin'}/>
            </div>
        </div>

    </div>
    </div>

  )
}

export default Signup