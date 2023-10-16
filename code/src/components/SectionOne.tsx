/* eslint-disable max-lines */

'use client';

import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

// eslint-disable-next-line max-lines-per-function
export default function SectionOne({
  setActive,
}: {
  setActive: (value: boolean) => void;
}) {
  const squares = [
    {
      header: 'Protection',
      icon: (
        <Image
          src="/protection.png"
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
          src="/tracking.png"
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
          src="/flexibility.png"
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
          src="/easiness.png"
          alt="Easiness Icon"
          className="w-10"
          width={80}
          height={80}
        />
      ),
      text: 'Feel free to transact anywhere, anytime',
    },
  ];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="features"
      className="relative flex flex-row justify-between mx-auto pt-20 mt-20 z-30 bg-white"
    >
      <div className="w-1/2">
        <div className="w-1/2 -translate-y-40 translate-x-20 px-14">
          <Image
            src="/01.svg"
            alt="01"
            className="w-80"
            width={251}
            height={248}
          />
        </div>
        <h1 className="w-10/12 -translate-y-65 translate-x-35 px-14 text-5xl">
          Best features provided by
          <span className="font-bold"> RentalCompany</span>
        </h1>
        <p className="w-8/12 -translate-y-58 translate-x-35 px-14">
          At RentalCompany, we are committed to offering an exceptional rental
          experience, thanks to our innovative features designed for your
          convenience.
        </p>
        <div className="w-7/12 flex flex-row justify-between items-center -translate-y-50 translate-x-35 px-14 gap-2">
          <button
            type="button"
            className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-1000 px-4 ease-in-out rounded-3xl py-4 px-8"
            onClick={() => setActive(true)}
          >
            Get Started
          </button>
          <button
            type="button"
            className="text-center cursor-pointer bg-transparent border-none"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector('#about')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            onKeyDown={handleKeyDown}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="w-1/4 h-1/4 flex grid justify-start -translate-y-20 -translate-x-40 items-center grid-cols-2 gap-10">
        {squares.map((item, index) => {
          const uniqueId = uuidv4();
          return (
            <div
              key={uniqueId}
              className={`flex flex-col justify-center items-center rounded-lg w-40 h-40 ${
                index === 1
                  ? 'bg-custom-orange text-black scale-110 ml-2 mb-4'
                  : 'bg-custom-light-grey text-text-grey'
              }`}
            >
              <div className="text-center text-sm">{item?.header}</div>
              <div className="text-center py-2">{item?.icon}</div>
              <div className="text-center text-sm px-2">{item?.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
