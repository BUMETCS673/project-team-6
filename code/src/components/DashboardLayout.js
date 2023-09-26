'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
export default function DashboardLayout({ children }) {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex flex-row border h-screen">
        {/* side bar */}
        <div className="flex flex-col pl-10 w-1/5 border bg-white">
          <div className="p-3">
            <p className="p-1 text-orange-500 font-bold ">
              Rental<span className="underline">Company</span>
            </p>
          </div>

          <div className="py-2 font-semibold text-[#cbcedb]">MENU</div>
          {/*  */}
          <div className="flex flex-col gap-4 font-semibold text-[#cbcedb]">
            <Link className="flex flex-row" href={'/dashboard/managecars'}>
              {/* <img src={userIcon} alt="User Icon" /> */}
              <p>Manage Cars</p>
            </Link>
            <Link className="flex flex-row" href={'/dashboard/addcar'}>
              {/* <img src={add} alt="add icon" /> */}
              <p>Add Cars</p>
            </Link>
            <Link className="flex flex-row" href={'/dashboard/editcar'}>
              {/* <img src={edit} alt="User Icon" /> */}
              <p>Edit Cars</p>
            </Link>
            <Link className="flex flex-row" href={'/dashboard/carinformation'}>
              {/* <img src={info} alt="U" /> */}
              <p>Car Information</p>
            </Link>
            <Link className="flex flex-row" href={'/dashboard/maintenance'}>
              {/* <img src={maintenance} alt="User Icon" /> */}
              <p>Maintenance</p>
            </Link>
            <Link className="flex flex-row" href={'/dashboard/editmaintenance'}>
              {/* <img src={maintenance} alt="User Icon" /> */}
              <p>Edit Maintenance</p>
            </Link>
          </div>
        </div>

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
                className="bg-orange-500 text-white px-2 py-1 rounded-2xl mr-2"
                onClick={() => signOut({ callbackUrl: '/signin' })}
              >
                <p className="text-white px-4">Log Out</p>
              </button>
            </div>

            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </>
  );
}
