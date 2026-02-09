"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Sun, BookOpen, ShieldCheck, Droplets, Mic2, Monitor } from "lucide-react";

const services = [
    {
        icon: Users,
        title: "Well Management System",
        desc: "Structured administration ensuring smooth operations and student focus."
    },
    {
        icon: Sun,
        title: "Spacious & Bright Classrooms",
        desc: "Naturally lit, airy environments designed for active learning."
    },
    {
        icon: BookOpen,
        title: "Extra Curricular Activities",
        desc: "Arts, dance, and music to nurture creative talents beyond books."
    },
    {
        icon: Mic2,
        title: "Personality Development",
        desc: "Public speaking and leadership programs to build confidence."
    },
    {
        icon: Users,
        title: "Low Student-Teacher Ratio",
        desc: "Individual attention for every child to ensure concept mastery."
    },
    {
        icon: ShieldCheck,
        title: "Expert Staff",
        desc: "Qualified, experienced, and caring educators dedicated to growth."
    },
    {
        icon: CheckCircle2,
        title: "Communication Skills",
        desc: "Focus on English fluency and effective expression from an early age."
    },
    {
        icon: Droplets,
        title: "R.O. Water",
        desc: "Safe, purified drinking water stations throughout the campus."
    },
    {
        icon: ShieldCheck,
        title: "24/7 Surveillance",
        desc: "CCTV monitoring to ensure the safety and security of every child."
    },
    {
        icon: Monitor,
        title: "Digital Classrooms",
        desc: "Modern teaching aids to make learning interactive and visual."
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-charcoal text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full mix-blend-overlay blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container-wide relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        className="text-gold font-heading font-bold tracking-widest uppercase text-sm block mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        className="text-display text-4xl md:text-5xl text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our Core Services
                    </motion.h2>
                    <motion.p
                        className="text-lg text-white/70 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We go beyond textbooks to provide a comprehensive ecosystem that takes care of your child's
                        academic, physical, and emotional needs like parents would.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-display text-white mb-3">{service.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
