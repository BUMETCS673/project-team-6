'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const logger = require('pino')();

export default function SignInForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res: any = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setErrorMsg('Invalid Credentials');
        return;
      }
      logger.info(res);
      router.replace('/dashboard/managecars');
    } catch (error) {
      logger.info(error);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      setErrorMsg('All fields are necessary.');
      return;
    }

    try {
      const response = await fetch('api/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
      });

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      logger.info('Error during registration: ', error);
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-gray-200">
      <div className="flex rounded-3xl shadow-xl bg-white w-1/2 h-1/2 items-center space-x-4">
        {/* Login Form */}
        {isLogin && (
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-3  w-1/2 px-10"
          >
            {errorMsg && (
              <div className="bg-red-400 text-white p-3 rounded-md mb-2">
                {errorMsg}
              </div>
            )}
            <div>
              <p className="font-bold">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="rounded-xl border border-gray-500 py-1 pl-2 w-full"
              />
            </div>
            <div>
              <p className="font-bold">Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="rounded-xl border border-gray-500 py-1 pl-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="text-black border border-gray-400 rounded-lg px-6 py-3"
            >
              Sign In with credentials
            </button>
          </form>
        )}

        {/* Sign Up Button */}
        {isLogin ? (
          <div className="w-1/2 flex flex-col justify-center items-center bg-blue-400 h-full rounded-bl-5xl">
            <p className="text-white text-lg font-bold flex flex-col">
              Don&apos;t Have an Account Yet?
              <span className="text-xs font-light">
                Let&apos;s get you all set up so you can start it up
              </span>
            </p>
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setErrorMsg(null);
              }}
              className="text-white border border-white rounded-lg px-6 py-3 mt-4 "
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex bg-white w-full h-full items-center space-x-4">
            <div className="w-1/2 flex flex-col justify-center items-center  bg-blue-400 h-full rounded-br-5xl">
              <p className="text-white text-lg font-bold flex flex-col items-center">
                Already Signed up?
                <span className="text-xs font-light ">
                  Sign in to your account so you can continue{' '}
                </span>
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setErrorMsg(null);
                  setResponseMessage('');
                }}
                className="text-white border border-white rounded-lg px-6 py-3 mt-4 "
              >
                Sign In
              </button>
            </div>

            <form
              onSubmit={handleSignUp}
              className="flex flex-col gap-3  w-1/2 px-10"
            >
              {responseMessage && (
                <div
                  className={`p-3 rounded-md mb-2 ${
                    responseMessage?.includes('Error') ||
                    responseMessage?.includes('Invalid')
                      ? 'bg-red-400'
                      : 'bg-green-400'
                  } text-white`}
                >
                  {responseMessage}
                </div>
              )}
              <div className="flex flex-row gap-3">
                <div>
                  <p className="font-bold">Firstname</p>
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    className="rounded-xl border border-gray-500 py-1 pl-2 w-full"
                  />
                </div>
                <div>
                  <p className="font-bold">Lastname</p>
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    className="rounded-xl border border-gray-500 py-1 pl-2 w-full"
                  />
                </div>
              </div>

              <div>
                <p className="font-bold">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="rounded-xl border border-gray-500 py-1 pl-2 w-full"
                />
              </div>
              <div>
                <p className="font-bold">Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="rounded-xl border border-gray-500 py-1 pl-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="text-black border border-gray-400 rounded-lg px-6 py-3"
              >
                Sign Up a New Account
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
