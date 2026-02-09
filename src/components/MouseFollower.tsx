"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function MouseFollower() {
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(0, springConfig);
    const springY = useSpring(0, springConfig);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setCursorXY({ x: e.clientX, y: e.clientY });
            springX.set(e.clientX - 16);
            springY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).tagName === "BUTTON") {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [springX, springY]);

    return (
        <motion.div
            className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-gold pointer-events-none z-[100] mix-blend-difference"
            style={{
                x: springX,
                y: springY,
            }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? "rgba(212, 175, 55, 0.2)" : "transparent",
            }}
        />
    );
}
