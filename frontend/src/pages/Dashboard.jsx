import React, {useEffect} from 'react'
import AppBar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
       navigate('/signin'); // Redirect logged-in users to Dashboard
    } 
  }, [])

  return (
    <div className="h-full bg-[url('/assets/4864051.jpg')] bg-cover">
        <AppBar />
        <Balance value={'10,000'} />
        <Users />
    </div>
  )
}

export default Dashboard

