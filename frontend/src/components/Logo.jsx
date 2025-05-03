import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 m-5">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 font-bold text-4xl">
        Pay
        <span className="text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          X
        </span>
      </div>
    </div>
  );
};

export default Logo;
