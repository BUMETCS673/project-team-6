'use client';

import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AccessPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="grid place-items-center h-screen bg-gray-200">
      <div className="flex rounded-3xl shadow-xl bg-white w-1/2 h-1/2 items-center space-x-4">
        {isLogin ? (
          <SignIn
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          >
            <button
              data-testid="to-signup"
              type="button"
              onClick={() => {
                setIsLogin(false);
              }}
              className="text-white border border-white rounded-lg px-6 py-3 mt-4 "
            >
              Sign Up
            </button>
          </SignIn>
        ) : (
          <SignUp
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          >
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
              }}
              className="text-white border border-white rounded-lg px-6 py-3 mt-4 "
              data-testid="signIn"
            >
              Sign In
            </button>
          </SignUp>
        )}
      </div>
    </div>
  );
}
