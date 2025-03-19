import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

  return (
    <div className="h-full bg-[url('/assets/4864051.jpg')] bg-cover">

        <div onClick={() => navigate('/')} className='h-14 flex justify-between'>
        <div className='flex flex-col justify-center cursor-pointer h-full pb-4 ml-6 mt-6 text-5xl text-white font-bold'>
            PayEase
        </div>  
        </div>


    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
    {/* Background Overlay */}


    {/* Card Container */}
    <div className="relative bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-lg max-w-md text-center">
      <h2 className="text-3xl font-bold text-white">Seamless Payments</h2>
      <p className="mt-2 text-lg text-white">Fast, secure, and hassle-free transactions at your fingertips.</p>

      {/* Dummy Features */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-xl">✅</span>
          <p>Instant Transfers</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl">🔒</span>
          <p>Bank-Level Security</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl">📱</span>
          <p>Mobile-Friendly</p>
        </div>
      </div>

      {/* Button */}
      <button onClick={() => {
        navigate('/signup')
      }} className="mt-4 cursor-pointer bg-white text-black px-6 py-2 rounded-lg hover:bg-purple-500 transition">
        Get Started
      </button>
    </div>
  </div>
    </div>
    
  )
}

export default Home