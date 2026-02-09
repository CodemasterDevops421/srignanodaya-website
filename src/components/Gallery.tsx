"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop",
        alt: "School Bus",
        category: "Transport",
        color: "bg-blue-600"
    },
    {
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
        alt: "Classroom Learning",
        category: "Academics",
        color: "bg-amber-500"
    },
    {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
        alt: "Student Activities",
        category: "Activities",
        color: "bg-rose-500"
    },
    {
        src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
        alt: "Library",
        category: "Facilities",
        color: "bg-emerald-500"
    },
    {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        alt: "Computer Lab",
        category: "Technology",
        color: "bg-purple-500"
    },
    {
        src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
        alt: "Sports Day",
        category: "Sports",
        color: "bg-orange-500"
    }
];

export default function Gallery() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <motion.span
                        className="text-gold font-heading font-bold tracking-widest uppercase text-sm block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Life at Gnanodaya
                    </motion.span>
                    <motion.h2
                        className="text-display text-4xl md:text-5xl text-charcoal"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Moments of <span className="text-gold italic">Joy & Learning</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${index === 1 || index === 4 ? "md:col-span-2" : ""}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />

                            {/* Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 ${img.color} mix-blend-multiply`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <span className="text-sm font-bold tracking-widest uppercase mb-2">{img.category}</span>
                                <h3 className="text-2xl font-display">{img.alt}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
