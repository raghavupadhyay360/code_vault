import React from 'react';

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-400">Sign Up</h2>
          <p className="mt-2 text-sm text-gray-400">
            Join us today and start your journey
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 mt-1 text-gray-300 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="email"
              type="email"
              placeholder="Raghav@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 mt-1 text-gray-300 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                id="remember-me" 
                type="checkbox" 
                className="w-4 h-4 text-blue-500 border-gray-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-xs text-gray-400">
          &copy;2024 Code Vault. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Signup;
