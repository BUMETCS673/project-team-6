/* eslint-disable max-lines */

'use client';

import Image from 'next/image';

interface HeroProps {
    imageRef: React.RefObject<HTMLImageElement>;
    setActive: (value: boolean) => void
    imageDimensions: {
        height: number;
        width: number;
    };
}

// eslint-disable-next-line max-lines-per-function
export default function Hero({imageRef, setActive, imageDimensions}: HeroProps) {
    return (
        <>
            <section
                id="home"
                className="relative w-full h-full text-white bg-black mx-auto flex flex-col sm:flex-row justify-between items-center pb-10 pt-20"
            >
                <div className="w-full sm:w-1/2 px-4 sm:px-14 text-xl sm:text-8xl -translate-y-10 sm:-translate-y-40">
                {/* Some text on the left */}
                <p>Keep track of your rentals</p>
                </div>

                <div className="relative sm:absolute bottom-0 left-0 right-0 transform w-full bg-black z-20">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-110 w-3/4 z-10">
                    {/* Car cards in the center */}
                    <Image
                    src="/CarsImgCards.png"
                    alt="Car Image Cards"
                    className="w-full"
                    width={1066}
                    height={720}
                    />
                </div>
                <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-75 w-2/12 z-20"
                >
                    <Image
                    src="/StartButton.svg"
                    alt="Start Button"
                    className="w-full hover:opacity-100 opacity-75 transition duration-1000 ease-in-out cursor-pointer"
                    onClick={() => setActive(true)}
                    width={148}
                    height={148}
                    />
                </div>
                {/* Car cards in the center */}
                <Image
                    src="/Divider.svg"
                    alt="Divider"
                    className="absolute -translate-y-30 w-full z-20"
                    ref={imageRef}
                    width={1326}
                    height={306}
                />
                </div>

                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end items-center z-10 mt-8 sm:mt-0">
                {/* Image of a car on the right */}
                <Image
                    src="/carImage.png"
                    alt="Car Image"
                    className="w-1/2 sm:w-213 h-auto sm:h-160"
                    width={426}
                    height={320}
                />
                </div>
                <div
                style={{ height: imageDimensions?.height }}
                className="absolute w-full translate-y-90 bg-black z-0"
                />
            </section>

            <div className="absolute top-0 left-0 right-0 bottom-0 translate-y-15 opacity-50 z-0">
                {/* Background texture */}
                <Image
                src="/BackgroundTexture.svg"
                alt="Texture"
                className="w-full"
                width={1326}
                height={688}
                />
            </div>
        </>
    )
}