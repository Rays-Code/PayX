import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black to-gray-800 relative overflow-hidden">
      
      {/* Top Bar (Logo + Button) absolutely positioned */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-5 z-10">
        <Logo />
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => {
          navigate("/signup")
        }}>
          Get Started</button>
      </div>

      {/* Centered Text */}
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex flex-col text-white text-5xl lg:text-8xl font-poppins font-semibold text-center drop-shadow-xl">
          <div className="lg:p-2">Payments</div>
          <div className="lg:p-2">made effortless, secure</div>
          <div className="lg:p-2">lightning fast.</div>
        </div>
      </div>
    </div>
  )
}

export default Home
