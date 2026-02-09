"use client";

import React, { useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

function Counter({ value, label }: { value: number; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const spring = useSpring(0, { mass: 1, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    React.useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            <div className="text-6xl md:text-7xl font-display font-light text-charcoal mb-2 tabular-nums">
                <motion.span>{display}</motion.span>
                <span className="text-gold text-4xl align-top">+</span>
            </div>
            <p className="text-sm font-heading font-medium tracking-widest uppercase text-slate-500">
                {label}
            </p>
        </div>
    );
}

const stats = [
    { value: 15, label: "Years of Excellence" },
    { value: 1200, label: "Students Enrolled" },
    { value: 60, label: "Expert Faculty" },
    { value: 100, label: "Results Guaranteed" },
];

export default function Stats() {
    return (
        <section className="py-24 bg-off-white border-y border-gray-200">
            <div className="container-wide">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <Counter key={index} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
}
