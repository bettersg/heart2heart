import React from 'react'
import { googleLogin } from '../../config/firebaseConfig'

const LoginForm: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center">Login</h1>
        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-emerald-400 text-white hover:bg-emerald-500 focus:outline-none my-1"
          onClick={googleLogin}
        >
          Login with Google
        </button>
      </div>
    </div>
  </div>
)

export default LoginForm
