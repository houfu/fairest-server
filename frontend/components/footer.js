import Link from 'next/link'
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-white ">
            <div className="container mx-auto mt-8 px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6">
                        <Link href='/'>
                            <a
                                className="text-gray-900 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                            >
                                <Image src='/fairest_logo.png' width='40' height='40'/> fairest
                            </a>
                        </Link>
                    </div>

                    <div className="flex-1">
                        <p className="uppercase font-extrabold text-gray-500 md:mb-6">Links</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="#"
                                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >FAQ</a
                                >
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="#"
                                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Help</a
                                >
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="#"
                                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Support</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase font-extrabold text-gray-500 md:mb-6">Legal</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="#"
                                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Terms</a
                                >
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="#"
                                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Privacy</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                            fairest Project
                        </p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="#"
                                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Official Home</a
                                >
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="#"
                                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >About Us</a
                                >
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a
                                    href="#"
                                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                                >Contact</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
