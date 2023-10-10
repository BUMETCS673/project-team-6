/* eslint-disable max-lines */

'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import AccessPage from './AccessPage';

// eslint-disable-next-line max-lines-per-function
export default function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (imageRef.current) {
      setImageDimensions({
        height: imageRef.current.clientHeight,
        width: imageRef.current.clientWidth,
      });
    }
  }, [imageRef]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup effect when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [active]);

  const squaresOne = [
    {
      header: 'Protection',
      icon: (
        <Image
          src="/favicon.svg"
          alt="Protection Icon"
          className="w-10"
          width={80}
          height={80}
        />
      ),
      text: 'Data Protection guarantees',
    },
    {
      header: 'Tracking',
      icon: (
        <Image
          src="/favicon.svg"
          alt="Tracking Icon"
          className="w-10"
          width={80}
          height={80}
        />
      ),
      text: 'Track all your financial transactions ',
    },
    {
      header: 'Flexibility',
      icon: (
        <Image
          src="/favicon.svg"
          alt="Flexibility Icon"
          className="w-10"
          width={80}
          height={80}
        />
      ),
      text: 'Delivery through multiple channels',
    },
    {
      header: 'Easiness',
      icon: (
        <Image
          src="/favicon.svg"
          alt="Easiness Icon"
          className="w-10"
          width={80}
          height={80}
        />
      ),
      text: 'Feel free to transact anywhere, anytime',
    },
  ];

  const squaresTwo = [
    {
      header: '456M',
      text: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      header: '456M',
      text: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
      header: '456M',
      text: 'Lorem ipsum dolor sit amet, consectetur.',
    },
  ];

  const handleKeyInteraction = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setActive(false);
    }
  };

  return (
    <>
      <Head>
        {/* Preloading images */}
        <link rel="preload" as="image" href="/favicon.svg" />
        <link rel="preload" as="image" href="/CompanyLogo.svg" />
        <link rel="preload" as="image" href="/CarsImagCards.png" />
        <link rel="preload" as="image" href="/StartButton.svg" />
        <link rel="preload" as="image" href="/Divider.svg" />
        <link rel="preload" as="image" href="/carImage.png" />
        <link rel="preload" as="image" href="/BackgroundTexture.svg" />
        <link rel="preload" as="image" href="/01.svg" />
        <link rel="preload" as="image" href="/02.svg" />
        <link rel="preload" as="image" href="/CarFloating.svg" />
        <link rel="preload" as="image" href="/03.svg" />
      </Head>
      {active && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50">
          <AccessPage />
          <div
            className="absolute top-0 bottom-0 left-0 right-0 bg-transparent z-0"
            onClick={() => setActive(false)}
            onKeyDown={handleKeyInteraction}
            role="button"
            tabIndex={0}
            aria-label="Close sign-in form"
          />
        </div>
      )}
      <div className="bg-white h-full w-full">
        {/* Top Bar */}
        <nav className="fixed top-0 w-full flex justify-between items-center px-4 py-10 bg-gradient-to-b from-black to-transparent z-40">
          <div className="flex justify-start items-center sm:w-1/3 px-12">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#home')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Image
                src="/CompanyLogo.svg"
                alt="Company Logo"
                width={244.59}
                height={23.84}
              />
            </a>
          </div>
          <ul className="flex justify-center items-center space-x-4 sm:space-x-10 sm:w-1/3">
            <li>
              <a
                href="#features"
                className="text-white hover:text-custom-orange transition duration-800"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#features')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-custom-orange transition duration-800"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#about')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#strategy"
                className="text-white hover:text-custom-orange transition duration-800"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector('#strategy')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Strategy
              </a>
            </li>
          </ul>
          <div className="px-10 flex justify-end items-center sm:w-1/3">
            <button
              data-testid="authPopup"
              type="button"
              onClick={() => setActive(true)}
              className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-800 px-4 ease-in-out rounded-3xl py-2 sm:py-4 sm:px-8"
            >
              <span>Get Started</span>
            </button>
          </div>
        </nav>

        {/* Hero */}
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
                src="/CarsImagCards.png"
                alt="Car Image Cards"
                className="w-full"
                width={1066}
                height={720}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-75 w-2/12 opacity-75 hover:opacity-100 transition duration-800 ease-in-out z-20">
              <Image
                src="/StartButton.svg"
                alt="Start Button"
                className="w-full"
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

        {/* Body Sections */}
        {/* Section 1 */}
        <section
          id="features"
          className="relative flex flex-row justify-between mx-auto pt-20 mt-20 z-30 bg-white"
        >
          <div className="w-1/2">
            <div className="w-1/2 -translate-y-40 translate-x-20 px-14">
              {/* The 01 number image */}
              <Image
                src="/01.svg"
                alt="01"
                className="w-80"
                width={251}
                height={248}
              />
            </div>
            <h1 className="w-10/12 -translate-y-65 translate-x-35 px-14 text-5xl">
              Best features provided by{' '}
              <span className="font-bold">RentalCompany</span>
            </h1>
            <p className="w-8/12 -translate-y-58 translate-x-35 px-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Donec in efficitur leo. In
              scelerisque quam non defd mollis. Vivamus sed porttitor dui. Sed
              in sem a nisl wsde faucibus lobortis.
            </p>
            <div className="w-7/12 flex flex-row justify-between items-center -translate-y-50 translate-x-35 px-14 gap-2">
              <button
                type="button"
                className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-800 px-4 ease-in-out rounded-3xl py-4 px-8"
              >
                Get Started
              </button>
              <p className="text-center">Learn More</p>
            </div>
          </div>
          <div className="w-1/4 h-1/4 flex grid justify-start -translate-x-40 items-center grid-cols-2 gap-10">
            {squaresOne.map((item, index) => {
              const uniqueId = uuidv4();
              return (
                <div
                  key={uniqueId}
                  className={`flex flex-col justify-center items-center rounded-lg w-40 h-40 ${
                    index === 1
                      ? 'bg-black text-white scale-110 ml-2 mb-4'
                      : 'bg-custom-light-grey text-text-grey'
                  }`}
                >
                  <div className="text-center text-sm">{item?.header}</div>
                  <div className="text-center p-4">{item?.icon}</div>
                  <div className="text-center text-sm">{item?.text}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2 */}
        <section id="about" className="relative flex flex-col z-30 bg-white">
          <div className="relative flex flex-row justify-between items-center mx-auto z-20 bg-white">
            <div className="w-1/2">
              <div className="w-1/2 -translate-y-40 translate-x-20 px-14">
                {/* The 02 number image */}
                <Image
                  src="/02.svg"
                  alt="02"
                  className="w-80"
                  width={251}
                  height={248}
                />
              </div>
              <h1 className="w-10/12 -translate-y-65 translate-x-35 px-14 text-5xl">
                Learn more about{' '}
                <span className="font-bold">RentalCompany</span>
              </h1>
            </div>
            <div className="w-1/2">
              <p className="w-8/12 -translate-y-30 translate-x-35 px-14 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum. Donec in efficitur leo. In
                scelerisque quam non defd mollis. Vivamus sed porttitor dui. Sed
                in sem a nisl wsde faucibus lobortis.
              </p>
            </div>
            <div className="w-9/12 absolute -translate-y-40 translate-x-90 px-14">
              <div className="w-full flex justify-between items-center h-25 -translate-y-10">
                <div className="w-2 h-2 bg-extra-light-grey rounded-full translate-x-2" />
                <div className="flex-grow w-1/3 h-0.5 bg-extra-light-grey mx-2" />
                <div className="w-2 h-2 bg-extra-light-grey rounded-full -translate-x-2" />
              </div>
            </div>
          </div>
          <div className="absolute w-full flex flex-row justify-center translate-y-40 items-center gap-10 px-40 z-20">
            {squaresTwo.map((item, index) => {
              const uniqueId = uuidv4();
              return (
                <div
                  key={uniqueId}
                  className={`flex flex-col justify-center items-center rounded-lg w-1/3 h-40 bg-custom-light-grey 
                    ${index === 0 && 'text-text-grey'}
                    ${index === 1 && `text-custom-grey`}
                    ${index === 2 && `text-dark-grey`}
                  }`}
                >
                  <div className="text-center text-6xl">{item?.header}</div>
                  <div className="text-center text-2xl">{item?.text}</div>
                </div>
              );
            })}
          </div>
        </section>

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

        {/* Footer */}
        <footer className="relative flex flex-col justify-center items-center gap-20 rounded-t-7xl bg-black text-white z-30 p-6 mx-14">
          <div className="w-5/12 mb-4 justify-center items-center pt-10 text-center">
            <p className="text-5xl">
              Lorem ipsum dolor sit amet, adipiscing elit.
            </p>
          </div>
          <button
            type="button"
            className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-800 px-4 ease-in-out rounded-3xl py-2 sm:py-4 sm:px-8"
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
      </div>
    </>
  );
}
