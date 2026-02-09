"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-24 pb-8 border-t border-white/10">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-charcoal font-serif font-bold text-2xl">
                                S
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold uppercase tracking-wider leading-none text-white">
                                    Sri Gnanodaya
                                </span>
                                <span className="text-xs tracking-widest uppercase opacity-60">
                                    Institutions
                                </span>
                            </div>
                        </div>

                        <p className="text-white/60 leading-relaxed max-w-xs">
                            Empowering minds with intelligence and character. The foundational school for your child's bright future.
                        </p>

                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-gold">Quick Links</h4>
                        <ul className="space-y-4">
                            {["About Us", "Admissions", "Academics", "Gallery", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-gold">Programs</h4>
                        <ul className="space-y-4">
                            {["Little Soldiers (Pre-School)", "Concept School (1-7)", "Day Care", "Summer Camp"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recognition */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-gold">Recognition</h4>
                        <div className="space-y-4 text-white/60 text-sm">
                            <p className="border-l-2 border-white/20 pl-4 py-1">
                                <strong className="block text-white mb-1">Little Soldiers</strong>
                                Recognised by Govt. of A.P.<br />
                                RC No. 2637/A5/2022
                            </p>
                            <p className="border-l-2 border-white/20 pl-4 py-1">
                                <strong className="block text-white mb-1">Concept School</strong>
                                Recognised by Govt. of A.P.<br />
                                RC No. 230/A5/2024
                            </p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2025 Sri Gnanodaya Educational Society. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
