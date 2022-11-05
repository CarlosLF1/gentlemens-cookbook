import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import { GiKnifeFork } from 'react-icons/gi';

const LoginPage = () => (
  <div className="min-h-full h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div className="mb-10">
        <div className="flex justify-center">
          <GiKnifeFork className='w-14 h-14'/>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
        <p className="text-center text-sm text-gray-600 mt-5">
          Don&apos;t have an account yet? {' '}
          <Link to="/signup" className="font-medium text-green-600 hover:text-green-900">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    <Login />
  </div>
);

export default LoginPage;
