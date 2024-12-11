import React from 'react';
const NotFound=()=> {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="text-center">
        <h2 className="text-9xl font-bold text-indigo-600 animate-bounce">404</h2>
        <p className="text-2xl text-indigo-600 mt-4">
          Page not found
        </p>
        <p className="text-lg text-indigo-600 mt-2">
          Check your url and try again.
        </p>
        
      </div>
    </div>
  )
}
export default NotFound;

