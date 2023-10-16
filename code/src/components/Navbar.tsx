/* eslint-disable max-lines */

'use client';

import Image from 'next/image';

// eslint-disable-next-line max-lines-per-function
export default function Navbar({
  setActive,
}: {
  setActive: (value: boolean) => void;
}) {
  return (
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
          className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-1000 px-4 ease-in-out rounded-3xl py-2 sm:py-4 sm:px-8"
        >
          <span>Get Started</span>
        </button>
      </div>
    </nav>
  );
}
