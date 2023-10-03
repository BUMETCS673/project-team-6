'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Sidebar from './SideBar'; 


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
    <div className="flex flex-row border h-screen">
      {/* side bar */}
       <Sidebar />
 
      {/* Car information */}
      <div className=" border  flex-grow bg-gray-50 items-center">
        <div className="flex flex-row bg-white p-5">
          <div>
            <p>Search icon</p>
          </div>
          <div className="flex-grow w-80 pr-10">
            {/* Registration number or vehicle name */}
            <input
              type="text"
              placeholder="Registration number or vehicle name"
              className="bg-white border rounded px-2 py-1 focus:outline-none w-full font-semibold text-[#cbcedb]"
            />
          </div>
          <div className="ml-auto">
            <button
              type="button"
              className="bg-orange-500 text-white px-2 py-1 rounded-2xl mr-2"
              onClick={() => signOut({ callbackUrl: '/signin' })}
            >
              <p className="text-white px-4">Log Out</p>
            </button>
          </div>

          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
