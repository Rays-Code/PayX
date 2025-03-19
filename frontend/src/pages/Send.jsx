import React, { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Send = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const name = searchParams.get('name')

    const [amount, setAmount] = useState('')

    const navigate = useNavigate()

  return (
    <div className="bg-[url('/assets/4864051.jpg')] bg-cover">
        <div className='h-14 flex justify-between' onClick={() => navigate('/')}>
        <div className='flex flex-col justify-center cursor-pointer h-full ml-6 mt-4 text-5xl text-white font-bold'>
            PayEase
        </div>
        </div>

        <div className="flex justify-center h-screen">
        <div className='h-full flex flex-col justify-center'>
            <div className='h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg'>
                <div className='flex flex-col space-y-1.5 p-6'>
                    <h2 className='text-3xl font-bold text-center'>Send Money</h2>
                </div>
                <div className='p-6'>
                    <div className='flex items-center space-x-4'>
                        <div className='w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center'>
                            <span className='text-2xl text-white'>{name[0]}</span>
                        </div>
                        <h3 className='text-2xl font-semibold'>{name}</h3>
                    </div>
                    <div className='space-y-4'>
                        <div className='space-y-2'>
                            <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' for='amount'>Amount (in Rs)</label>
                            <input onChange={(e) => {
                                setAmount(e.target.value)
                            }} value={amount} type='number' id='amount' placeholder='Enter amount' className='flex h-10 w-full rounded-md border border-slate-200 px-3 py-2 text-sm' />
                        </div>
                        <button to={'send'} firtName={name} id={id} onClick={async () => {
                            await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/api/v1/account/transfer`, {
                                to: id,
                                amount: amount
                            }, {
                                headers: {
                                    'Authorization': 'Bearer '+ localStorage.getItem("token")
                                }
                            })
                            navigate('/transactionsuccess')
                        }} className='justify-center cursor-pointer active:scale-95 rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-black text-white'>
                            Initiate Transfer</button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Send