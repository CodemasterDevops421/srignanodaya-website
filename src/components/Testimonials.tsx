"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content: "The holistic approach at Sri Gnanodaya has transformed my child. The focus isn't just on grades but on building character and confidence.",
        author: "Rajesh Kumar",
        role: "Parent, Grade 4 Student",
        initials: "RK",
        color: "bg-blue-500"
    },
    {
        id: 2,
        content: "Moving to the new campus with A/C classrooms was a game changer. The facilities are top-notch and the teachers truly care about every student.",
        author: "Priya Sharma",
        role: "Parent, Little Soldiers",
        initials: "PS",
        color: "bg-pink-500"
    },
    {
        id: 3,
        content: "I love the computer lab and the library! Learning is fun here because we get to do so many activities beyond just text books.",
        author: "Arjun Reddy",
        role: "Student, Grade 7",
        initials: "AR",
        color: "bg-emerald-500"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-32 bg-charcoal text-white overflow-hidden relative">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />

            <div className="container-narrow relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-gold font-heading font-bold tracking-widest uppercase text-sm">
                        Voices of Trust
                    </span>
                    <h2 className="text-display text-5xl mt-4">Community Stories</h2>
                </motion.div>

                <div className="relative min-h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl max-w-4xl w-full relative"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-charcoal p-4 rounded-full border border-white/10">
                                <Quote size={32} className="text-gold" />
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
                                {/* Avatar */}
                                <div className={`w-20 h-20 rounded-full ${testimonials[currentIndex].color} flex items-center justify-center text-2xl font-bold tracking-widest shadow-lg shrink-0`}>
                                    {testimonials[currentIndex].initials}
                                </div>

                                <div className="text-center md:text-left flex-1">
                                    <div className="flex gap-1 justify-center md:justify-start text-gold mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                                    </div>
                                    <p className="text-xl md:text-2xl font-display leading-relaxed mb-6 italic text-white/90">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                    <div>
                                        <h4 className="font-heading font-bold text-lg text-white">{testimonials[currentIndex].author}</h4>
                                        <p className="text-white/60 text-sm tracking-wider uppercase">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 md:-mx-12">
                        <button
                            onClick={prev}
                            className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-gold text-white transition-all shadow-lg backdrop-blur-sm"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-gold text-white transition-all shadow-lg backdrop-blur-sm"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-gold w-8" : "bg-white/20 hover:bg-white/40"}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
