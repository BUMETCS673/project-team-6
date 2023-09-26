import Link from "next/link"
export default function MainPage() {
    return (
        <>
            <div className="w-full h-screen bg-black p-2 ">
                <div className="flex flex-row justify-between items-baseline px-5 py-3">
                    <h1 className="text-xl font-semibold flex flex-row text-white ">
                        Rental<span className="underline text-2xl">Company</span>
                    </h1>
                    <div className="text-gray-500 font-semibold flex flex-row justify-between gap-10">

                        <p>Features</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Learn More</p>

                    </div>
                    <Link href="/signin" className="bg-orange-500 px-4 rounded-2xl text-white items-center flex">
                        <span>Get Start</span>
                    </Link>
                </div>


                <div className="text-white p-40 text-5xl font-bold">
                    <p>
                        Keep track of
                    </p>
                    <p>
                        your rental
                    </p>
                </div>

            </div>
        </>
    )
}