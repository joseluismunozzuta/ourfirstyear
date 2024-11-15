"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TitleAnimation } from "@/components/title";
import { ConfettiButtonDemo } from "./confettibutton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import PulsatingButton from "./ui/pulsating-button";
import Link from "next/link";

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
                className="h-full w-full z-50 flex flex-col justify-between items-center">
                <div className="h-2/3 flex flex-col justify-center gap-3 items-center m-auto px-4">
                    <TitleAnimation words="Feliz 1º año," />
                    <TitleAnimation words="amor" />
                    <TitleAnimation words="de mi vida" />
                    <TitleAnimation words="❤️" />
                    <ConfettiButtonDemo></ConfettiButtonDemo>
                </div>
                <div className="h-1/3 flex flex-col my-4 m-auto justify-center">
                    <TextGenerateEffect words="365 días juntos 🥹 hoy te regalo una razón por cada día vivido ❤️" />
                    <Link href="/reasons" className="my-5">
                        <PulsatingButton className="m-auto">🤍</PulsatingButton>
                    </Link>
                </div>
            </motion.div>
        </ImagesSlider>)
    );
}
