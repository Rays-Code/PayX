import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const TransactionSuccess = () => {
  const navigate = useNavigate();
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
         navigate('/signin'); // Redirect logged-in users to Dashboard
      } 
    }, [])

  return (
    <div className="bg-[url('/assets/4864051.jpg')] bg-cover">
      <div className='h-14 flex justify-between' onClick={() => navigate('/')}>
        <div className='flex flex-col justify-center cursor-pointer h-full ml-6 mt-4 text-5xl text-white font-bold'>
            PayEase
        </div>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <div className="text-blue-500 text-6xl">✔</div>
        <h2 className="text-2xl font-bold mt-4">Transaction Successful</h2>
        <p className="text-gray-600 mt-2">Your payment has been processed successfully.</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 cursor-pointer active:scale-95 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default TransactionSuccess;
