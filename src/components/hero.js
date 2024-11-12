"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TitleAnimation } from "@/components/title";

export function ImagesSliderDemo() {
    const images = [
        "/images/hero1.jpg",
        "/images/hero2.jpg",
        "/images/hero3.jpg",
        "/images/hero4.jpg",
        "/images/hero5.jpg",
        "/images/hero6.jpg",
    ];
    return (
        (<ImagesSlider className="h-screen" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="w-full z-50 flex flex-col justify-center items-center">
                <div className="w-full flex flex-col justify-center gap-3 items-center m-auto px-4">
                    <TitleAnimation words = "Feliz 1º año,"/>
                    <TitleAnimation words = "amor"/>
                    <TitleAnimation words = "de mi vida"/>
                    <TitleAnimation words = "❤️"/>
                </div>
            </motion.div>
        </ImagesSlider>)
    );
}
