import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="bg-black min-h-full w-full">
        {/* Top Bar */}
        <nav className="fixed top-0 w-full flex justify-between items-center px-4 py-10 bg-gradient-to-b from-black to-transparent z-40">
          <div className="w-1/3 flex justify-start items-center px-12">
              <Image src="/CompanyLogo.svg" alt="Company Logo" className="w-80" width={244.59} height={23.84}/>
          </div>
          {/* <ul className="absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-10">
              {// Add your navbar items here}
              <li><Link href="#" className="text-custom-grey">Features</Link></li>
              <li><Link href="#" className="text-custom-grey">About</Link></li>
              <li><Link href="#" className="text-custom-grey">Strategy</Link></li>
          </ul> */}
          <ul className="w-1/3 flex justify-center items-center space-x-10">
              {/* Add your navbar items here */}
              <li><Link href="#" className="text-custom-grey">Features</Link></li>
              <li><Link href="#" className="text-custom-grey">About</Link></li>
              <li><Link href="#" className="text-custom-grey">Strategy</Link></li>
          </ul>
          <div className="w-1/3 px-10 flex justify-end items-center">
              <Link href="/signin" className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-800 px-4 ease-in-out rounded-3xl py-4 px-8">
                  <span>Get Started</span>
              </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative w-full text-white bg-black mx-auto flex justify-between items-center pb-10 pt-20">
          <div className="w-1/2 -translate-y-40 px-14 text-8xl">
            {/* Some text on the left */}
            <p>Keep track of your rentals</p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-3/4 w-full bg-black z-20">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-110 w-3/4">
                {/* Car cards in the center */}
                <Image src="/CarsImagCards.png" alt="Car Image Cards" className="w-full" width={1066} height={720}/>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-36 -translate-y-75 w-2/12 opacity-75 hover:opacity-100 transition duration-800 ease-in-out z-20">
                <Image src="/StartButton.svg" alt="Start Button" className="w-full" width={148} height={148}/>
              </div>
              {/* Car cards in the center */}
              <Image src="/Divider.svg" alt="Divider" className="absolute -translate-y-30 w-full" width={1326} height={306}/>
          </div>

          <div className="w-1/2 flex justify-end items-center z-10">
            {/* Image of a car on the right */}
            <Image src="/carImage.png" alt="Car Image" className="w-213 h-160" width={852} height={640}/>
          </div>

          <div className="absolute top-0 left-0 right-0 translate-y-15 opacity-50 z-0">
            <Image src="/BackgroundTexture.svg" alt="Texture" className="w-full" width={1326} height={688}/>
          </div>
        </section>

        {/* Body Sections */}
        {/* Section 1 */}
        <section className="relative flex flex-row justify-between mx-auto pt-20 mt-20 z-30 bg-white">
          <div className="w-1/2">
            <div className="w-1/2 -translate-y-40 translate-x-20 px-14">
              <Image src="/01.svg" alt="01" className="w-80" width={251} height={248}/>
            </div>
            <h1 className="w-10/12 -translate-y-65 translate-x-35 px-14 text-5xl">Best features provided by <span className="font-bold">RentalCompany</span></h1>
            <p className="w-8/12 -translate-y-58 translate-x-35 px-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
              Donec in efficitur leo. In scelerisque quam non defd mollis. 
              Vivamus sed porttitor dui. Sed in sem a nisl wsde faucibus lobortis.
            </p>
            <div className="w-7/12 flex flex-row justify-between items-center -translate-y-50 translate-x-35 px-14 gap-2">
              <button className="bg-custom-orange text-white hover:bg-custom-hover-orange transition duration-800 px-4 ease-in-out rounded-3xl py-4 px-8">
                Get Started
              </button>
              <p className="text-center">Learn More</p>
            </div>
          </div>
          <div className="w-1/4 h-1/4 flex grid justify-start -translate-x-40 items-center grid-cols-2 gap-10">
              {[0, 1, 2, 3].map(index => (
                  <div
                      key={index}
                      className={`flex flex-col justify-center items-center rounded-lg w-40 h-40 ${
                          index === 1 ? 'bg-black text-white scale-110 ml-2 mb-4' : 'bg-custom-light-grey text-text-grey'
                      }`}
                  >
                      <div className="text-center">Text</div>
                      <div className="text-center">Icon</div>
                      <div className="text-center">Text</div>
                  </div>
              ))}
          </div>
          {/* Add your metric images here */}
        </section>

        {/* Section 2 */}
        <section className='relative flex flex-row justify-between mx-auto pt-20 z-30 bg-white z-20'>
          <section className="container mx-auto py-12">
            <p>Lorem ipsum...</p>
            {/* Add your metric information here */}
          </section>

          {/* Section 3 */}
          <section className="container mx-auto flex justify-between items-center py-12">
            <img src="/path_to_another_image.jpg" alt="Some Image" className="w-1/3" />
            <div className="w-2/3">
              <p>Lorem ipsum...</p>
              <button className="bg-orange-400 hover:bg-orange-500 rounded-lg p-2 mt-4">
                Try Now
              </button>
            </div>
          </section>

          {/* Section 4 */}
          <section className="container mx-auto flex justify-between items-center py-12">
            <p className="w-2/3">Lorem ipsum...</p>
            <video className="w-1/3" controls>
              <source src="/path_to_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
        </section>

        {/* Footer */}
        <footer className="relative flex flex-row justify-between z-30 p-6">
          <p className="mb-4">Lorem ipsum...</p>
          <button className="bg-orange-400 hover:bg-orange-500 rounded-lg p-2 mb-4">
            Join Now
          </button>
          <img src="/path_to_footer_logo.png" alt="Company Logo" className="w-32" />
        </footer>
      </div>
    </>
  );
}
