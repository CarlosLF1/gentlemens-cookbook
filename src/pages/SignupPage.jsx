import React from 'react';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import Signup from '../components/Signup';

const SignupPage = () => (
  <div className="min-h-full h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div className="mb-10">
      <div className="flex justify-center">
          <GiKnifeFork className='w-14 h-14'/>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up to create an account
        </h2>
        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account? {' '}
          <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
            Login
          </Link>
        </p>
      </div>
    </div>
    <Signup />
  </div>
);

export default SignupPage;
