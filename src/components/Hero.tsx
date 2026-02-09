"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
        >
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, opacity }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />

                {/* Placeholder Pattern - Replace with Video/Image */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
            </motion.div>

            {/* Content */}
            <div className="container-wide relative z-20 text-center text-white pt-20 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium tracking-widest uppercase mb-6 text-gold/90">
                        Admissions Open for 2025-26
                    </span>
                </motion.div>

                <motion.h1
                    className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Intelligence + Character <br />
                    <span className="italic font-light text-white/90">The Goal of True Education</span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10 font-light leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Sri Gnanodaya Schools provide a world-class foundation for your child's future,
                    combining academic excellence with moral integrity in the heart of Kanuru.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="#programs"
                        className="group relative px-8 py-4 rounded-full bg-gold text-charcoal font-heading font-bold tracking-wide overflow-hidden transition-transform hover:-translate-y-1"
                    >
                        <span className="relative z-10">Explore Programs</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </a>
                    <a
                        href="#contact"
                        className="group px-8 py-4 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white font-heading font-medium tracking-wide hover:bg-white/10 transition-all hover:-translate-y-1"
                    >
                        Book a Visit
                    </a>
                </motion.div>

                {/* USP Tickers */}
                <motion.div
                    className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-white/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    {[
                        "No Donations",
                        "100% Study Guarantee",
                        "Low Student-Teacher Ratio",
                        "Transport Facility"
                    ].map((usp) => (
                        <div key={usp} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-gold" />
                            <span>{usp}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}
