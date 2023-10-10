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
            className="relative flex flex-col flex justify-center items-center z-30 bg-white pb-20"
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
                            Hear from the founders of{' '}
                            <span className="font-bold">RentalCompany</span>
                        </h1>
                    </div>
                        <div className="w-1/2">
                            <p className="w-8/12 translate-y-5 translate-x-35 px-14 text-black">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                lacinia odio vitae vestibulum. Donec in efficitur leo. In
                                scelerisque quam non defd mollis. Vivamus sed porttitor dui. Sed
                                in sem a nisl wsde faucibus lobortis.
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
                <div className="w-8/12 px-14">
                    {/* Video element */}
                    <video
                        width="100%"
                        height="100%"
                        controls
                        aria-label="Description of the video's content"
                        title="Short description of the video"
                        className="rounded-4xl"
                    >
                        <source src="/sample.mp4" type="video/mp4" />
                        {/* Adjusting 'kind' attribute to "captions" */}
                        <track
                        kind="captions"
                        src="/subtitle_en.vtt"
                        srcLang="en"
                        label="English"
                        default
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </>
    )
}