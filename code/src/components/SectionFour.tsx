/* eslint-disable max-lines */

'use client';

import Image from 'next/image';

// eslint-disable-next-line max-lines-per-function
export default function SectionFour() {
    return(
        <>
            {/* Section 4 */}
            <section
            id="strategy"
            className="relative flex flex-col h-full justify-center items-center z-30 bg-white pb-20"
            >
                <div className="relative flex flex-row justify-between items-center mx-auto z-20 bg-white">
                    <div className="w-1/2">
                        <div className="w-1/2 translate-x-20 px-14">
                            {/* The 03 number image */}
                            <Image
                                src="/03.svg"
                                alt="03"
                                className="w-80"
                                width={251}
                                height={248}
                            />
                        </div>
                        <h1 className="w-10/12 -translate-y-25 translate-x-35 px-14 text-5xl">
                            Hear from the founders of 
                            <span className="font-bold"> RentalCompany</span>
                        </h1>
                    </div>
                    <div className="w-1/2">
                        <p className="w-8/12 translate-y-10 translate-x-35 px-14 text-black text-end">
                            Join our founders as they share the passion, journey, and vision behind 
                            RentalCompany. Learn how we&apos;re reshaping the rental landscape and why we&apos;re 
                            confident in delivering an unparalleled experience to our community.
                        </p>
                    </div>
                    <div className="w-9/12 absolute -translate-y-6 translate-x-90 px-14">
                        <div className="w-full flex justify-between items-center h-25 -translate-y-10">
                            <div className="w-2 h-2 bg-extra-light-grey rounded-full translate-x-2" />
                            <div className="flex-grow w-full h-0.5 bg-extra-light-grey mx-2" />
                            <div className="w-2 h-2 bg-extra-light-grey rounded-full -translate-x-2" />
                        </div>
                    </div>
                </div>
                {/* Video element with rounded corners */}
                <div className="w-8/12 h-130 px-14">
                    {/* Video element */}
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/sitXeGjm4Mc"
                        title="YouTube video player"
                        className="rounded-4xl border-0 h-full"
                        allowFullScreen
                        aria-label="YouTube Video"
                    />
                </div>
            </section>
        </>
    )
}
