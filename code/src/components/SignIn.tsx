import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthField from './AuthField';

const logger = require('pino')();

export default function SignIn({
  email,
  password,
  setEmail,
  setPassword,
  children,
}) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
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

  return (
    <>
      <form onSubmit={handleLogin} className="flex flex-col gap-3  w-1/2 px-10">
        {errorMsg && (
          <div className="bg-red-400 text-white p-3 rounded-md mb-2">
            {errorMsg}
          </div>
        )}
        <AuthField data-testid="email" type="text" onChangeValue={setEmail}>
          Email
        </AuthField>

        <AuthField type="password" onChangeValue={setPassword}>
          Password
        </AuthField>
        <button
          type="submit"
          className="text-black border border-gray-400 rounded-lg px-6 py-3"
        >
          Sign In with credentials
        </button>
      </form>

      <div className="w-1/2 flex flex-col justify-center items-center bg-custom-orange h-full rounded-bl-5xl rounded-r-2xl">
        <p className="text-white text-lg font-bold flex flex-col">
          Don&apos;t Have an Account Yet?
          <span className="text-xs font-light">
            Let&apos;s get you all set up so you can start it up
          </span>
        </p>
        {children}
      </div>
    </>
  );
}
