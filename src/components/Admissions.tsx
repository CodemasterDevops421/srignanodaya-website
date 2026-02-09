"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Admissions() {
    return (
        <section id="admissions" className="py-24 bg-white relative overflow-hidden">
            <div className="container-wide grid lg:grid-cols-2 gap-16 items-start py-12">

                {/* Contact Info Side */}
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold font-heading font-bold tracking-widest uppercase text-xs mb-6">
                            Join Our Family
                        </span>
                        <h2 className="text-display text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
                            Admissions Open <br />
                            <span className="text-slate-300 italic">2025-26</span>
                        </h2>

                        <p className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed">
                            We invite you to visit our campus and experience the Gnanodaya difference.
                            Fill out the form to schedule a tour or request a callback.
                        </p>

                        <div className="space-y-8">
                            <div className="flex group">
                                <div className="mr-6 p-4 bg-off-white rounded-2xl text-charcoal group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-charcoal text-lg mb-1">Visit Us</h4>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        D.No: 2-75, Near Penthu Coast Church,<br />
                                        Gandhi Bomma Centre, Kanuru - 520007
                                    </p>
                                </div>
                            </div>

                            <div className="flex group">
                                <div className="mr-6 p-4 bg-off-white rounded-2xl text-charcoal group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-charcoal text-lg mb-1">Call Us</h4>
                                    <p className="text-slate-500 text-lg">9390017772, 9397961714</p>
                                </div>
                            </div>

                            <div className="flex group">
                                <div className="mr-6 p-4 bg-off-white rounded-2xl text-charcoal group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-charcoal text-lg mb-1">Email Us</h4>
                                    <p className="text-slate-500 text-lg">srignanodayaschool@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Form Side */}
                <motion.div
                    className="bg-off-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white relative z-10"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <ContactForm />
                </motion.div>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-off-white to-transparent -z-10" />
        </section>
    );
}

function ContactForm() {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://formsubmit.co/ajax/srignanodayaschool@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                </div>
                <h3 className="text-3xl font-display text-charcoal mb-4">Thank You!</h3>
                <p className="text-slate-500 mb-8">We have received your inquiry. Our admissions team will contact you shortly.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-gold font-bold uppercase tracking-wider text-sm hover:underline"
                >
                    Send Another Message
                </button>
            </motion.div>
        );
    }

    return (
        <>
            <h3 className="text-3xl font-display text-charcoal mb-8">Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* HoneyPot to prevent spam */}
                <input type="text" name="_honey" className="hidden" />
                <input type="hidden" name="_subject" value="New Admission Inquiry from Website" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Parent Name</label>
                        <input required name="parent_name" type="text" className="w-full px-4 py-4 rounded-xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-slate-300" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Phone Number</label>
                        <input required name="phone" type="tel" className="w-full px-4 py-4 rounded-xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-slate-300" placeholder="+91 98765 43210" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address</label>
                    <input required name="email" type="email" className="w-full px-4 py-4 rounded-xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-slate-300" placeholder="john@example.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Child's Name</label>
                        <input required name="child_name" type="text" className="w-full px-4 py-4 rounded-xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-slate-300" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Grade Applying For</label>
                        <div className="relative">
                            <select name="grade" className="w-full px-4 py-4 rounded-xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-gold outline-none transition-all appearance-none text-charcoal">
                                <option>Select Grade</option>
                                <option value="Nursery">Nursery</option>
                                <option value="PP1 - PP2">PP1 - PP2</option>
                                <option value="Grade 1">Grade 1</option>
                                <option value="Grade 2">Grade 2</option>
                                <option value="Grade 3">Grade 3</option>
                                <option value="Grade 4">Grade 4</option>
                                <option value="Grade 5">Grade 5</option>
                                <option value="Grade 6">Grade 6</option>
                                <option value="Grade 7">Grade 7</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Message (Optional)</label>
                    <textarea name="message" rows={4} className="w-full px-4 py-4 rounded-xl bg-white border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-gold outline-none transition-all placeholder:text-slate-300 resize-none" placeholder="Is there anything specific you'd like to know?"></textarea>
                </div>

                <div className="space-y-4">
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full py-4 bg-charcoal text-white rounded-full font-heading font-bold tracking-wide hover:bg-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? (
                            <span>Sending...</span>
                        ) : (
                            <>
                                <span>Submit Inquiry</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                    {status === "error" && (
                        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or call us directly.</p>
                    )}
                </div>
            </form>
        </>
    );
}
