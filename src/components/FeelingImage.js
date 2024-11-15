"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Loader from "./loader";

export default function FeelingImage({ url = "/images/hero1.jpg" }) {

    const [loading, setLoading] = useState(true);
    const [currentUrl, setCurrentUrl] = useState(url);

    useEffect(() => {
        // Trigger loader whenever the URL changes
        setLoading(true);
        setCurrentUrl(url);
    }, [url]);

    return (
        <>
            <motion.div className={`heartbeat flex justify-center mx-auto w-10/12 px-12 my-2 ${loading ? "opacity-0" : "opacity-100"
                }`}
                whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                }}>
                <Image
                    src={currentUrl || "/images/hero1.jpg"}
                    width={380}
                    height={380}
                    className=
                    "rounded-lg"
                    alt="thumbnail"
                    priority
                    unoptimized
                    onLoadingComplete={() => setLoading(false)}
                />
            </motion.div>
            {loading && <Loader />}
        </>
    );
}
