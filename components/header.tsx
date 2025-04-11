"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-700 bg-clip-text text-transparent">
                                Kriyanix
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li>
                                <Link href="#" className="text-gray-700 hover:text-purple-700 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#mission" className="text-gray-700 hover:text-purple-700 transition-colors">
                                    Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="#technology" className="text-gray-700 hover:text-purple-700 transition-colors">
                                    Technology
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-700 hover:text-purple-700 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-purple-700 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                        <Link
                            href="#"
                            className="block px-3 py-2 text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="#mission"
                            className="block px-3 py-2 text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Mission
                        </Link>
                        <Link
                            href="#technology"
                            className="block px-3 py-2 text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Technology
                        </Link>
                        <Link
                            href="#contact"
                            className="block px-3 py-2 text-gray-700 hover:text-purple-700 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
