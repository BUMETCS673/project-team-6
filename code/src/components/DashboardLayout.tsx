'use client';

import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  // const { status } = useSession({
  //   required: true,
  // });
  // if (status === 'loading') {
  //   return redirect('/signin');
  // }

  return (
    <div className="flex border h-screen">
      {/* side bar */}
      <Sidebar />

      {/* Car information */}
      <div className="flex-col w-full bg-gray-50 flex">
        <div className="flex flex-row bg-white w-full h-10 items-center justify-between">
          {/* Left Icon */}
          <div className="flex w-full pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#cbcedb"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            {/* Registration number or vehicle name */}
            <input
              type="text"
              placeholder="Registration number or vehicle name"
              className="flex-grow mx-4 bg-white rounded px-2 font-light text-sm"
            />
          </div>

          <div className="flex flex-row items-center gap-x-4">
            <button
              type="button"
              className="bg-orange-500 text-white w-24 h-full rounded-2xl "
              onClick={() => signOut({ callbackUrl: '/signin' })}
            >
              Log Out
            </button>

            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </div>

        <div className="p-10 flex-grow">{children}</div>
      </div>
    </div>
  );
}
