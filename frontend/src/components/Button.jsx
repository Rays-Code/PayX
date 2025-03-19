import React from 'react'
import { useNavigate } from 'react-router-dom'



const Button = ({label, func, to, id, firstName, bColor, tColor}) => {
  const navigate = useNavigate()

  const handleClick = async () => {
  if(func){
    await func();
    navigate(`/${to}`)
  } 

  else if(to === 'send'){
    navigate(`/${to}?id=${id}&name=${firstName}`);
  } 
 
  }
  


  return (
    <button onClick={handleClick} 
    type="button" className={`w-full text-${tColor} shadow-lg bg-${bColor} cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}>
        {label}
    </button>
  )
}

export default Button