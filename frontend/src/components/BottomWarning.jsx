import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label, buttonText, to}) => {
  return (
    <div className='flex justify-center'>
        <div className='py-2 text-sm  flex justify-center'>
            {label}
        </div>
        <Link to={to} className='mt-1 pointer underline pl-1 cursor-pointer'>
        {buttonText}
        </Link>
    </div>
  )
}

export default BottomWarning