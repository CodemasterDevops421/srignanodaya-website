"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Sun, BookOpen, ShieldCheck, Droplets, Mic2, Monitor, Heart, GraduationCap } from "lucide-react";

const services = [
    {
        icon: Users,
        title: "Well Management System",
        desc: "Structured administration ensuring smooth operations and student focus.",
    },
    {
        icon: Sun,
        title: "Spacious & Bright Classrooms",
        desc: "Naturally lit, airy environments designed for active learning.",
    },
    {
        icon: BookOpen,
        title: "Extra Curricular Activities",
        desc: "Arts, dance, and music to nurture creative talents beyond books.",
    },
    {
        icon: Mic2,
        title: "Personality Development",
        desc: "Public speaking and leadership programs to build confidence.",
    },
    {
        icon: GraduationCap,
        title: "Low Student-Teacher Ratio",
        desc: "Individual attention for every child to ensure concept mastery.",
    },
    {
        icon: Heart,
        title: "Expert Staff",
        desc: "Qualified, experienced, and caring educators dedicated to growth.",
    },
    {
        icon: CheckCircle2,
        title: "Communication Skills",
        desc: "Focus on English fluency and effective expression from an early age.",
    },
    {
        icon: Droplets,
        title: "R.O. Water",
        desc: "Safe, purified drinking water stations throughout the campus.",
    },
    {
        icon: ShieldCheck,
        title: "24/7 Surveillance",
        desc: "CCTV monitoring to ensure the safety and security of every child.",
    },
    {
        icon: Monitor,
        title: "Digital Classrooms",
        desc: "Modern teaching aids to make learning interactive and visual.",
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="container-wide relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold font-heading font-bold tracking-widest uppercase text-xs mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Parents Trust Us
                    </motion.span>
                    <motion.h2
                        className="text-display text-4xl md:text-5xl text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Services That <span className="text-gold italic">Matter</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-white/60 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We provide a vibrant, safe, and resource-rich environment where every detail
                        is designed to support your child's holistic development.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold/50 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.15)]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gold group-hover:text-charcoal text-gold">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-slate-100 mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-white transition-colors">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
