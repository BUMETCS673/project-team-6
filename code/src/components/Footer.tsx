/* eslint-disable max-lines */

'use client';

import Image from 'next/image';

// eslint-disable-next-line max-lines-per-function
export default function Footer({ setActive }: { setActive: (value: boolean) => void }) {      
    return (    
        <>
            {/* Footer */}
            <footer className="relative flex flex-col justify-center items-center gap-20 rounded-t-7xl bg-black text-white z-30 p-6 mx-14">
                <div className="w-4/12 mb-4 justify-center items-center pt-10 text-center">
                    <p className="text-6xl">
                        Experience the future of renting.
                    </p>
                </div>
                <button
                    type="button"
                    className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-1000 px-4 ease-in-out rounded-3xl py-2 sm:py-4 sm:px-8"
                    onClick={() => setActive(true)}
                >
                    Join <span className="font-bold">RentalCompany</span> Now
                </button>
                {/* Company Logo */}
                <Image
                    src="/CompanyLogo.svg"
                    alt="Company Logo"
                    width={366}
                    height={36}
                />
                <div className="w-full flex flex-row justify-evenly items-center">
                    <p className="w-1/3 text-sm text-center text-custom-grey">
                        Terms & Agreements
                    </p>
                    <p className="w-1/3 text-sm text-center text-custom-grey">
                        @2023 RentalCompany All Rights Reserved
                    </p>
                    <p className="w-1/3 text-sm text-center text-custom-grey">
                        Privacy Policy
                    </p>
                </div>
            </footer>
        </>
    );
}