'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;

  const { status } = useSession({
    required: true,
  });
  if (status === 'loading') {
    return redirect('/signin');
  }

  return (
    <div className="flex border h-screen">
      {/* side bar */}
      <Sidebar />

      {/* Car information */}
      <div className="flex-col w-full bg-gray-50 flex">
        <div className="flex flex-row bg-white w-full h-12 items-center px-4">
          {/* Left Icon */}
          <div className="w-4 flex justify-center items-center ml-4">
            <Image
              src="/Search.svg"
              alt="Search Icon"
              className="w-full"
              width={15}
              height={15}
            />
          </div>

          <div className="flex flex-row items-center gap-x-4">
            <button
              type="button"
              className="bg-orange-500 text-white px-2 rounded-2xl mr-2"
              onClick={() => signOut({ callbackUrl: '/' })}
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
