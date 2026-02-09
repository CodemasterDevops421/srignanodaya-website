"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, User } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Programs", href: "#programs" },
        { name: "Facilities", href: "#facilities" },
        { name: "Admissions", href: "#admissions" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20" : "py-6 bg-transparent"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container-wide flex items-center justify-between">
                    <Link href="/" className="relative z-50 flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-serif font-bold text-xl overflow-hidden">
                            <span className="group-hover:scale-110 transition-transform duration-300">S</span>
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-heading font-bold uppercase tracking-wider leading-none transition-colors ${isScrolled ? "text-charcoal" : "text-charcoal lg:text-white"}`}>
                                Sri Gnanodaya
                            </span>
                            <span className={`text-xs tracking-widest uppercase opacity-80 ${isScrolled ? "text-slate" : "text-slate lg:text-white/80"}`}>
                                Institutions
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium uppercase tracking-widest relative group ${isScrolled ? "text-charcoal" : "text-white"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-gold" : "bg-white"
                                    }`} />
                            </Link>
                        ))}

                        <Link
                            href="#admissions"
                            className={`px-6 py-2.5 rounded-full font-heading font-medium text-sm tracking-wide transition-all hover:-translate-y-0.5 ${isScrolled
                                    ? "bg-charcoal text-white hover:bg-gold hover:shadow-lg"
                                    : "bg-white text-charcoal hover:bg-gold hover:text-white hover:shadow-lg"
                                }`}
                        >
                            Apply Now
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden relative z-50 p-2 text-charcoal"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? "#36454f" : "#ffffff"} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col items-center justify-center gap-8"
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? "auto" : "none"
                }}
                transition={{ duration: 0.3 }}
            >
                {navLinks.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        className="text-display text-4xl text-charcoal"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                            y: isMobileMenuOpen ? 0 : 20,
                            opacity: isMobileMenuOpen ? 1 : 0
                        }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </motion.a>
                ))}

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                        y: isMobileMenuOpen ? 0 : 20,
                        opacity: isMobileMenuOpen ? 1 : 0
                    }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        href="#admissions"
                        className="px-8 py-3 rounded-full bg-charcoal text-white font-heading font-medium tracking-wide"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Start Admission
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
}
