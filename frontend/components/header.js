import Link from 'next/link'
import Image from 'next/image'
import {useState} from "react"


export default function Header() {
    const [isOn, setIsOn] = useState(false)

    return (
        <header>
            <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
                <div
                    className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
                >
                    <div className="pl-4">
                        <Link
                            href="/"
                        >
                            <a className="text-gray-900 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                                <Image src='/fairest_logo.png' layout="intrinsic" width={40} height={40} alt={'Fairest Logo'} />
                                fairest
                            </a>

                        </Link>
                    </div>

                    <div className="block lg:hidden pr-4">
                        <button
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
                            onClick={() => setIsOn(!isOn)}
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>

                    <div
                        className={` w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block ${isOn? '' : 'hidden'} mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20`}
                        id="nav-content"
                    >
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                <a
                                    className="inline-block py-2 px-4 text-black font-bold no-underline"
                                    href="#"
                                >Home</a
                                >
                            </li>
                            <li className="mr-3">
                                <a
                                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                                    href="#"
                                >fairest Rules</a
                                >
                            </li>
                            <li className="mr-3">
                                <a
                                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                                    href="#"
                                >Settings</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
