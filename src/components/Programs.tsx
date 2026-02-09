"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GraduationCap, Baby } from "lucide-react";

const programs = [
    {
        title: "Little Soldiers",
        subtitle: "Pre-School",
        grade: "Baby Care - PP2",
        description: "A nurturing environment where young minds begin their journey of discovery. Focused on foundational skills, play-based learning, and character building.",
        color: "bg-gold",
        icon: Baby,
        features: ["A/C Classrooms", "Play Area", "Caring Staff"],
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Concept School",
        subtitle: "Primary Education",
        grade: "1st - 7th Class",
        description: "Rigorous academic curriculum balanced with creative arts and technology. We prepare students for future challenges with strong conceptual understanding.",
        color: "bg-charcoal",
        icon: GraduationCap,
        features: ["Computer Lab", "Digital Learning", "Low Teacher Ratio"],
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
    }
];

export default function Programs() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

    return (
        <section id="programs" ref={targetRef} className="relative h-[300vh] bg-off-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Section Header (Absolute for stickiness inside sticky container) */}
                <div className="absolute top-10 left-8 md:top-20 md:left-20 z-20 max-w-sm">
                    <motion.span
                        className="text-gold font-heading font-bold tracking-widest uppercase text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Programs
                    </motion.span>
                    <motion.h2
                        className="text-display text-5xl md:text-6xl text-charcoal mt-4 leading-none"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Academic Pathways
                    </motion.h2>
                </div>

                <motion.div style={{ x }} className="flex gap-10 pl-[5vw] md:pl-[30vw] min-w-max">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="group relative h-[70vh] w-[85vw] md:w-[60vw] lg:w-[45vw] overflow-hidden rounded-3xl bg-white shadow-xl transition-transform hover:-translate-y-2"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 h-1/2 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
                            </div>

                            {/* Content Card */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-lg h-2/3 flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl ${program.color} text-white`}>
                                            <program.icon size={28} />
                                        </div>
                                        <span className="font-heading font-medium text-slate uppercase tracking-wider text-sm">
                                            {program.grade}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-display text-charcoal mb-2">{program.title}</h3>
                                    <p className="text-gold font-medium mb-6">{program.subtitle}</p>

                                    <p className="text-slate text-lg mb-8 leading-relaxed line-clamp-3">
                                        {program.description}
                                    </p>

                                    <ul className="flex flex-wrap gap-3 mb-auto">
                                        {program.features.map(f => (
                                            <li key={f} className="px-3 py-1 bg-off-white rounded-md text-xs font-semibold text-charcoal uppercase tracking-wide">
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 flex justify-end">
                                        <button className="flex items-center gap-2 text-charcoal font-bold group-hover:gap-4 transition-all">
                                            Learn More <ArrowRight className="text-gold" size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* CTA Card at the end */}
                    <div className="h-[70vh] w-[40vw] flex items-center justify-center">
                        <div className="text-center p-10">
                            <h3 className="text-display text-5xl text-charcoal mb-6">Join Us Today</h3>
                            <p className="text-slate text-xl mb-8 max-w-md mx-auto">
                                Take the first step towards a bright future for your child.
                            </p>
                            <a href="#admissions" className="btn-primary">
                                Start Admission
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
