"use client";

import React from "react";
import { motion } from "framer-motion";
import { Library, Bus, Utensils, Wifi, Monitor, HeartPulse } from "lucide-react";

const facilities = [
    {
        icon: Monitor,
        title: "Computer Lab",
        desc: "State-of-the-art systems for digital literacy.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: Bus,
        title: "Transport",
        desc: "Safe and secure fleet covering all major routes.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
    },
    {
        icon: Library,
        title: "Library",
        desc: "Extensive collection of books and digital resources.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: Utensils,
        title: "Hygienic Dining",
        desc: "Clean environment with R.O. water stations.",
        image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1932&auto=format&fit=crop"
    },
    {
        icon: HeartPulse,
        title: "Health Care",
        desc: "Regular checkups and first-aid facilities.",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: Wifi,
        title: "Smart Campus",
        desc: "Wi-Fi enabled campus with digital classrooms.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Facilities() {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors duration-500" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl w-fit mb-4">
                                        <facility.icon size={24} className="text-gold" />
                                    </div>
                                    <h3 className="text-2xl font-display mb-2">{facility.title}</h3>
                                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                                        {facility.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
