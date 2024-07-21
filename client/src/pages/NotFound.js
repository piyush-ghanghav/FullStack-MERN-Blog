import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4'>
      <h1 className='text-9xl font-bold text-indigo-500'>
        404
      </h1>
      <p className='text-2xl font-medium text-gray-800 mt-4'>
        Uh-oh! The page you're looking for has disappeared.
      </p>
      <p className='text-md text-gray-600 mt-2'>
        It seems like we can't find the page you're looking for.
      </p>
      <img
        src='https://example.com/404-illustration.png' // Replace with an actual image URL
        alt='404 Illustration'
        className='w-full max-w-md mt-8 mb-8'
      />
      <Link
        to='/'
        className='px-6 py-2 bg-indigo-500 text-white text-lg rounded-md hover:bg-indigo-600 transition duration-300'
      >
        Take Me Home
      </Link>
      <p className='mt-6 text-gray-600'>
        If you think this is an error, please <a href="mailto:support@example.com" className='text-indigo-500 hover:underline'>contact support</a>.
      </p>
    </div>
  );
};

export default NotFound;
