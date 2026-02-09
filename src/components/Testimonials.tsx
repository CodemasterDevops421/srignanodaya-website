"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        content: "The holistic approach at Sri Gnanodaya has transformed my child. The focus isn't just on grades but on building character and confidence.",
        author: "Rajesh Kumar",
        role: "Parent, Grade 4 Student"
    },
    {
        id: 2,
        content: "Moving to the new campus with A/C classrooms was a game changer. The facilities are top-notch and the teachers truly care about every student.",
        author: "Priya Sharma",
        role: "Parent, Little Soldiers"
    },
    {
        id: 3,
        content: "I love the computer lab and the library! Learning is fun here because we get to do so many activities beyond just text books.",
        author: "Arjun Reddy",
        role: "Student, Grade 7"
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
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center text-center max-w-3xl"
                        >
                            <div className="mb-8 text-gold opacity-50">
                                <Quote size={48} />
                            </div>

                            <p className="text-2xl md:text-4xl font-display leading-relaxed mb-10">
                                "{testimonials[currentIndex].content}"
                            </p>

                            <div>
                                <h4 className="font-heading font-bold text-lg">{testimonials[currentIndex].author}</h4>
                                <p className="text-white/60 text-sm tracking-wider uppercase">{testimonials[currentIndex].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 mt-12">
                        <button
                            onClick={prev}
                            className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-charcoal transition-all"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === currentIndex ? "bg-gold w-8" : "bg-white/20"
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-charcoal transition-all"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
