import { useState } from 'react';
import AuthField from './AuthField';

const logger = require('pino')();

type Message = {
  text: string;
  type: 'red' | 'green';
};

export default function SignUp({
  email,
  password,
  setEmail,
  setPassword,
  children,
}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState<Message | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      setMessage({ type: 'red', text: 'All fields are necessary.' });
      return;
    }

    try {
      setIsSubmitting(true);

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

      if (!response.ok) {
        setMessage({ type: 'red', text: `HTTP status ${response.status}` });
        return;
      }

      const data = await response.json();
      setMessage({ type: 'green', text: data.message });
    } catch (error) {
      logger.info('Error during registration: ', error);
      setMessage({ type: 'red', text: 'Server error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex bg-white w-full h-full items-center space-x-4 rounded-2xl">
      <div className="w-1/2 flex flex-col justify-center items-center bg-custom-orange h-full rounded-br-5xl rounded-l-2xl">
        <p className="text-white text-lg font-bold flex flex-col items-center">
          Already Signed up?
          <span className="text-xs font-light ">
            Sign in to your account so you can continue
          </span>
        </p>
        {children}
      </div>

      <form
        onSubmit={handleSignUp}
        className="flex flex-col gap-3  w-1/2 px-10"
      >
        {message && (
          <div
            data-testid="message"
            className={`p-3 rounded-md mb-2 ${
              message.type === 'red' ? 'bg-red-400' : 'bg-green-400'
            } text-white`}
          >
            {message.text}
          </div>
        )}
        <div className="flex flex-row gap-3">
          <AuthField
            type="text"
            onChangeValue={setFirstname}
            data-testid="firstName"
          >
            Firstname
          </AuthField>
          <AuthField
            type="text"
            onChangeValue={setLastname}
            data-testid="lastName"
          >
            Lastname
          </AuthField>
        </div>

        <AuthField type="text" onChangeValue={setEmail} data-testid="email">
          Email
        </AuthField>

        <AuthField
          type="password"
          onChangeValue={setPassword}
          data-testid="password"
        >
          Password
        </AuthField>

        <button
          data-testid="submit-signup"
          type="submit"
          className="text-black border border-gray-400 rounded-lg px-6 py-3"
          disabled={isSubmitting}
        >
          Sign Up a New Account
        </button>
      </form>
    </div>
  );
}
