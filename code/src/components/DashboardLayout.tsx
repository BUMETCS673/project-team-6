'use client';

import { useSession, signOut } from 'next-auth/react';
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
    return redirect('/');
  }

  return (
    <div className="flex border h-screen">
      {/* side bar */}
      <Sidebar />

      {/* Car information */}
      <div className="flex-col w-full bg-gray-50 flex">
        <div className="flex flex-row-reverse bg-white w-full h-12 items-center px-4 justify-between">
          <div className="flex flex-row items-center gap-x-4">
            <button
              data-testid="signOut"
              type="button"
              className="bg-orange-500 text-white w-24 h-full rounded-2xl "
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="p-10 flex-grow overflow-auto">{children}</div>
      </div>
    </div>
  );
}
