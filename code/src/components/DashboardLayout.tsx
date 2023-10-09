'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace('/signin');
    }
  }, [session, router]);

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

          {/* Registration number or vehicle name */}
          <input
            type="text"
            placeholder="Registration number or vehicle name"
            className="flex-grow mx-4 bg-white rounded px-2 font-light text-sm text-[#cbcedb]"
          />

          <div className="flex flex-row items-center">
            <button
              type="button"
              className="bg-orange-500 text-white px-2 rounded-2xl mr-2"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              <p className="text-white px-4 py-1 text-sm">Log Out</p>
            </button>

            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </div>

        <div className="p-10 flex-grow">{children}</div>
      </div>
    </div>
  );
}
