"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Library, Bus, Utensils, Wifi, Monitor, HeartPulse } from "lucide-react";

// ... imports

const facilities = [
    {
        icon: Monitor,
        title: "Computer Education",
        desc: "Working knowledge of computers provided at low cost.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        colSpan: "md:col-span-2"
    },
    {
        icon: Bus,
        title: "Safe Transport",
        desc: "GPS-enabled fleet covering all major routes.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
        colSpan: "md:col-span-1"
    },
    {
        icon: Library,
        title: "A.V. Aids",
        desc: "Quality of education enhanced by Audio-Visual aids at low cost.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
        colSpan: "md:col-span-1"
    },
    {
        icon: Utensils,
        title: "Hygienic Dining",
        desc: "Nutritious meals in a clean, spacious hall.",
        image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop",
        colSpan: "md:col-span-2"
    },
    {
        icon: HeartPulse,
        title: "Wellness Center",
        desc: "Full-time nurse and regular health checkups.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
        colSpan: "md:col-span-1"
    },
    {
        icon: Wifi,
        title: "Smart Campus",
        desc: "Tech-enabled classrooms for immersive learning.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        colSpan: "md:col-span-2"
    }
];

export default function Facilities() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="facilities" className="py-24 bg-white">
            <div className="container-wide">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        className="text-gold font-heading font-bold tracking-widest uppercase text-sm block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        World-Class Infrastructure
                    </motion.span>
                    <motion.h2
                        className="text-display text-5xl md:text-6xl text-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Facilities Designed <br />
                        <span className="italic text-slate-400">for Holistic Growth</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-500 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We believe that the environment plays a crucial role in learning.
                        Our campus is equipped with modern amenities to ensure a comfortable
                        and stimulating atmosphere for every student.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer group ${facility.colSpan}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                                <Image
                                    src={facility.image}
                                    alt={facility.title}
                                    fill
                                    className="object-cover filter brightness-[0.8] group-hover:brightness-100 transition-all duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl w-fit mb-4 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                                        <facility.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold mb-2">{facility.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {facility.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
