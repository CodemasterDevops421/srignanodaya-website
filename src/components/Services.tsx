"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Sun, BookOpen, ShieldCheck, Droplets, Mic2, Monitor, Heart, GraduationCap } from "lucide-react";

const services = [
    {
        icon: Users,
        title: "Well Management System",
        desc: "Structured administration ensuring smooth operations and student focus.",
        color: "bg-blue-50 text-blue-600 border-blue-100 group-hover:border-blue-300"
    },
    {
        icon: Sun,
        title: "Spacious & Bright Classrooms",
        desc: "Naturally lit, airy environments designed for active learning.",
        color: "bg-amber-50 text-amber-600 border-amber-100 group-hover:border-amber-300"
    },
    {
        icon: BookOpen,
        title: "Extra Curricular Activities",
        desc: "Arts, dance, and music to nurture creative talents beyond books.",
        color: "bg-rose-50 text-rose-600 border-rose-100 group-hover:border-rose-300"
    },
    {
        icon: Mic2,
        title: "Personality Development",
        desc: "Public speaking and leadership programs to build confidence.",
        color: "bg-purple-50 text-purple-600 border-purple-100 group-hover:border-purple-300"
    },
    {
        icon: GraduationCap,
        title: "Low Student-Teacher Ratio",
        desc: "Individual attention for every child to ensure concept mastery.",
        color: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:border-emerald-300"
    },
    {
        icon: Heart,
        title: "Expert Staff",
        desc: "Qualified, experienced, and caring educators dedicated to growth.",
        color: "bg-teal-50 text-teal-600 border-teal-100 group-hover:border-teal-300"
    },
    {
        icon: CheckCircle2,
        title: "Communication Skills",
        desc: "Focus on English fluency and effective expression from an early age.",
        color: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:border-indigo-300"
    },
    {
        icon: Droplets,
        title: "R.O. Water",
        desc: "Safe, purified drinking water stations throughout the campus.",
        color: "bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:border-cyan-300"
    },
    {
        icon: ShieldCheck,
        title: "24/7 Surveillance",
        desc: "CCTV monitoring to ensure the safety and security of every child.",
        color: "bg-red-50 text-red-600 border-red-100 group-hover:border-red-300"
    },
    {
        icon: Monitor,
        title: "Digital Classrooms",
        desc: "Modern teaching aids to make learning interactive and visual.",
        color: "bg-violet-50 text-violet-600 border-violet-100 group-hover:border-violet-300"
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">

            <div className="container-wide relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold font-heading font-bold tracking-widest uppercase text-xs mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Parents Trust Us
                    </motion.span>
                    <motion.h2
                        className="text-display text-4xl md:text-5xl text-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Services That <span className="text-gold italic">Matter</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-500 leading-relaxed"
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
                            className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border-2 ${service.color.split(' ').pop()} border-transparent hover:-translate-y-1`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6 ${service.color.split(' ').slice(0, 2).join(' ')}`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
