/* eslint-disable max-lines */

'use client';

import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line max-lines-per-function
export default function SectionTwo() {
  const squares = [
    {
      header: '456M',
      text: 'Miles covered by our rentals yearly.',
    },
    {
      header: '30K+',
      text: 'Satisfied customers and counting.',
    },
    {
      header: 'Over 5 Years',
      text: 'Years of top-tier service.',
    },
  ];
  return (
    <>
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
              Learn more about <span className="font-bold">RentalCompany</span>
            </h1>
          </div>
          <div className="w-1/2">
            <p className="w-8/12 -translate-y-25 translate-x-35 px-14 text-black text-end">
              At RentalCompany, we pride ourselves on delivering not just a
              service, but an unparalleled experience. Our journey in the rental
              industry has been marked by dedication, innovation, and the trust
              of our valued customers. Join us and experience the best in
              vehicle rentals.
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
        <div className="absolute w-full flex flex-row justify-center translate-y-50 items-center gap-10 px-40 z-20">
          {squares.map((item, index) => {
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
                <div className="text-center text-2xl px-2">{item?.text}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
