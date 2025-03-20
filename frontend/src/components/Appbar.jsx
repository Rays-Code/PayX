import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AppBar = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()


     useEffect(() => {
         const fetch2 = async () => {
             const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}api/v1/user/info`, {
                 headers: {
                     'Authorization': 'Bearer ' + localStorage.getItem('token')
                 }
                
             })
             setUsername(res.data.user.firstName)
         }
         fetch2()
     }, [])
  return (
    <div className='h-14 flex justify-between'>
        <div onClick={() => navigate('/')} className='flex flex-col justify-center cursor-pointer h-full ml-4 shadow-white-600 text-4xl text-white font-bold'>
            PayEase
        </div>
        <div className='flex cursor-pointer'>
            <div className='flex text-white font-medium flex-col text-lg justify-center h-full mr-4'>
                Hello, {username}
            </div>
            <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
                <div className='flex flex-col justify-center h-full text-xl'>
                    {username[0]}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBar