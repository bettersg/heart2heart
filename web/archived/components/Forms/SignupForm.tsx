import React from 'react';
import { googleLogin } from '../../../src/config/firebaseConfig';

const SignupForm: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-yellow-100">
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="Placeholder"
          placeholder="Place text here..."
        />
        {/* <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirm Password"
        /> */}
        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-emerald-400 text-white hover:bg-emerald-500 focus:outline-none my-1"
          onClick={googleLogin}
        >
          Sign up with Google
        </button>
        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the{' '}
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="/#"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            className="no-underline border-b border-grey-dark text-grey-dark"
            href="/#"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-grey-dark mt-6">
        Already have an account?{' '}
        <a
          className="no-underline border-b border-blue text-blue"
          href="/login"
        >
          Log in.
        </a>
      </div>
    </div>
  </div>
);

export default SignupForm;
