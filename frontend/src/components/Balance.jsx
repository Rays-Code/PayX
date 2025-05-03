import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Balance = ({value}) => {
  const [balance, setBalance] = useState(0)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/signin')
  }


     useEffect(() => {
         const fetch2 = async () => {
             const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}/api/v1/user/info`, {
                 headers: {
                     'Authorization': 'Bearer ' + localStorage.getItem('token')
                 }
                
             })
             setBalance(res.data.balance)
         }
         fetch2()
     }, [])
  return (
    <div className='flex justify-between ml-6 mt-10 mb-4' >
        <div className='flex bg-white py-2 px-4 rounded shadow-lg cursor-pointer'>
        <div className='font-bold text-lg text-gray-700'>
            Your balance :
        </div>
        <div className='ml-4 text-lg text-gray-700'>
          ₹ {balance}
        </div>
        </div>
        <div>
        <button type="button" onClick={handleLogout} className="focus:outline-none text-white cursor-pointer active:scale-95 bg-red-600 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Log out</button>
        </div>
        
    </div>
  )
}

export default Balance