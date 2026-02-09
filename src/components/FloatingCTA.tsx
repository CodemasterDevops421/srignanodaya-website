"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

                    {/* Expanded Options */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                className="flex flex-col gap-3 mb-2"
                            >
                                <a
                                    href="https://wa.me/919390017772"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-bold"
                                >
                                    <MessageCircle size={20} />
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href="tel:+919390017772"
                                    className="flex items-center gap-3 bg-charcoal text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-bold"
                                >
                                    <Phone size={20} />
                                    <span>Call Now</span>
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Main Toggle Button */}
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`p-4 rounded-full shadow-2xl transition-all duration-300 ${isExpanded ? "bg-slate-200 text-charcoal rotate-90" : "bg-gold text-charcoal hover:scale-110"}`}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? <X size={24} /> : <MessageCircle size={28} className="fill-current" />}
                    </motion.button>
                </div>
            )}
        </AnimatePresence>
    );
}
