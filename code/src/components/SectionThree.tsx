/* eslint-disable max-lines */

'use client';

import Image from 'next/image';

// eslint-disable-next-line max-lines-per-function
export default function SectionThree() {

    return (
        <>
            {/* Section 3 */}
            <section className="relative flex justify-center items-center bg-white pt-20 pb-10">
                <div className="w-9/12 flex flex-row items-center rounded-7xl mx-40 py-10 bg-black text-white z-30">
                    <div className="w-5/12 flex flex-col gap-8">
                        <div className="w-full flex -translate-y-10">
                            <p className="w-full pl-14 text-4xl">
                                Lorem ipsum dolor sit amet, adipiscing elit.
                            </p>
                        </div>
                        <div className="w-full pl-14 justify-end items-start">
                            <button
                                type="button"
                                className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-800 px-4 ease-in-out rounded-3xl py-4 px-8"
                            >
                                Try <span className="font-bold">RentalCompany</span> Now
                            </button>
                        </div>
                    </div>
                    <div className="w-7/12 flex justify-end items-center pr-4 z-10">
                        {/* The car image in the middle black section */}
                        <Image
                        src="/CarFloating.svg"
                        alt="Car Floating"
                        className="w-158 h-115"
                        width={782}
                        height={573}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}