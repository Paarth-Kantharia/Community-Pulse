import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center font-handwriting">
      <div className="border rounded-2xl p-8 w-[500px] shadow-lg border-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl">Community Pulse</h1>
          <Link to="/" className="text-black bg-green-700 px-4 py-1 rounded-full hover:bg-green-600">Home</Link>
        </div>

        <h2 className="text-lg mb-4">User Login page</h2>

        <form className="flex flex-col space-y-4">
          <div>
            <label className="block mb-1">User Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring"
            />
          </div>

          <div className="text-sm">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-400 hover:underline">
              Register here
            </Link>
          </div>

          <button
            type="submit"
            className="mt-2 self-center px-6 py-2 border rounded-full border-green-600 text-green-500 hover:bg-green-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
