"use client"

import { useState } from "react"
import Logo from "../assets/Logo.jpg"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Blogs", href: "#blogs" },
        { name: "About", href: "#about" },
        { name: "Contact Us", href: "#contact" },
    ]

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-white/10 shadow-xl animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
                <div className="flex items-center justify-between gap-4 md:gap-8">

                    <div className="flex-shrink-0 animate-slide-in-left">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <img
                                className="w-24 md:w-30 h-auto object-contain transition-all duration-300"
                                src={Logo}
                                alt="CA Monk Logo"
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center gap-8 lg:gap-18">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group animate-fade-in">
                                <a
                                    href={link.href}
                                    className="text-white/80 text-sm font-serif transition-colors duration-300 group-hover:text-white"
                                >
                                    {link.name}
                                </a>
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-transparent group-hover:w-full transition-all duration-500 ease-out"></div>
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center animate-slide-in-right">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl animate-fade-in">
                    <div className="flex flex-col p-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                                className="block w-full text-center text-white/80 hover:text-white hover:bg-white/5 font-serif py-3 rounded-lg transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}