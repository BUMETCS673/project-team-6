/* eslint-disable max-lines */

'use client';

import { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Hero from './Hero';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import Footer from './Footer';
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
        <link rel="preload" as="image" href="/CarsImgCards.png" />
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
        <Navbar setActive={setActive} />
        <Hero
          setActive={setActive}
          imageRef={imageRef}
          imageDimensions={imageDimensions}
        />
        <SectionOne setActive={setActive} />
        <SectionTwo />
        <SectionThree setActive={setActive} />
        <SectionFour />
        <Footer setActive={setActive} />
      </div>
    </>
  );
}
