'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
      <div className="flex flex-col pl-10 w-1/5 border bg-white">
        <div className="p-3">
          <p className="p-1 text-orange-500 font-bold ">
            Rental<span className="underline">Company</span>
          </p>
        </div>

        <div className="py-2 font-semibold text-[#cbcedb]">MENU</div>

        <div className="flex flex-col gap-4 font-semibold text-[#cbcedb]">
          <Link className="flex flex-row" href="/dashboard/managecars">
            {/* <img src={userIcon} alt="User Icon" /> */}
            <p>Manage Cars</p>
          </Link>
          <Link className="flex flex-row" href="/dashboard/addcar">
            {/* <img src={add} alt="add icon" /> */}
            <p>Add Cars</p>
          </Link>
          <Link className="flex flex-row" href="/dashboard/editcar">
            {/* <img src={edit} alt="User Icon" /> */}
            <p>Edit Cars</p>
          </Link>
          <Link className="flex flex-row" href="/dashboard/carinformation">
            {/* <img src={info} alt="U" /> */}
            <p>Car Information</p>
          </Link>
          <Link className="flex flex-row" href="/dashboard/maintenance">
            {/* <img src={maintenance} alt="User Icon" /> */}
            <p>Maintenance</p>
          </Link>
          <Link className="flex flex-row" href="/dashboard/editmaintenance">
            {/* <img src={maintenance} alt="User Icon" /> */}
            <p>Edit Maintenance</p>
          </Link>
        </div>
      </div>

      {/* Car information */}
      <div className="flex-col w-full bg-gray-50 flex">
        <div className="flex flex-row bg-white w-full h-10 items-center">
          {/* Left Icon */}
          <div className="w-8 h-8 bg-gray-300 rounded-full" />

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
              onClick={() => signOut({ callbackUrl: '/signin' })}
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
