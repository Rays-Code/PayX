import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Button from './Button'
import Send from '../pages/Send'

const Users = () => {

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')



    useEffect(() => {
        const fetch = async () => {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}api/v1/user/bulk?filter=` + filter)
        setUsers(response.data.users)
        }

        fetch()
    }, [filter])

  return (
    <div className='ml-6 mr-6 pt-1 bg-opacity-50 backdrop-blur-lg text-white'>
        <div className='font-bold mt-6 text-lg'>
            Users
        </div>
        <div className='my-2 shadow-sm'>
            <input onChange={e => {
                setFilter(e.target.value)
            }} value={filter} type='text' placeholder='Search users...' className='w-full px-2 py-1 border rounded border-slate-200'></input>
        </div>
        <div>
            {users.map(user => {
                return <>
                <User key={user.id} user={user} />
                </>
            })}
        </div>
    </div>
  )
}

const User = ({user}) => {

    return (
        <div className='flex justify-between'>
            <div className='flex cursor-pointer'>
                <div className='rounded-full h-12 w-12 bg-white text-black flex justify-center mt-1 mr-2'>
                    <div className='flex flex-col justify-center h-full text-xl'>
                        {user.firstName[0]}
                    </div>
                </div>
                <div className='flex flex-col justify-center h-full'>
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center h-full'>
                <Button onClick={()=>{
                }} to={'send'} id={user.id} tColor={'black'} bColor={'white'} firstName={user.firstName} label={'Send Money'}/>
            </div>
        </div>
    )
}

export default Users