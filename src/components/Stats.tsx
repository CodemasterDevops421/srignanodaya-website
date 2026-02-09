"use client";

import React, { useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";
import { Trophy, Users, GraduationCap, Star } from "lucide-react";

function Counter({ value, label, icon: Icon }: { value: number; label: string; icon: any }) {
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
        <div ref={ref} className="flex flex-col items-center text-center group">
            <div className="mb-4 p-4 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <Icon size={32} />
            </div>
            <div className="text-5xl md:text-6xl font-display font-medium text-charcoal mb-2 tabular-nums">
                <motion.span>{display}</motion.span>
                <span className="text-gold text-3xl align-top">+</span>
            </div>
            <p className="text-sm font-heading font-bold tracking-widest uppercase text-slate-400 group-hover:text-gold transition-colors">
                {label}
            </p>
        </div>
    );
}

const stats = [
    { value: 16, label: "Years of Excellence", icon: Trophy },
    { value: 1200, label: "Students Enrolled", icon: Users },
    { value: 60, label: "Expert Faculty", icon: GraduationCap },
    { value: 100, label: "Results Guaranteed", icon: Star },
];

export default function Stats() {
    return (
        <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-charcoal" />
                <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-4 border-gold" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <Counter key={index} value={stat.value} label={stat.label} icon={stat.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
}
