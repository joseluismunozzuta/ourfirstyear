"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function FeelingImage({url = "/images/hero1.jpg"}){

    return (
        <>
            <motion.div className='heartbeat flex justify-center mx-auto w-10/12 px-12 my-2'
                whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                }}>
                <Image
                    src={url ? url : '/images/hero1.jpg'}
                    width={400}
                    height={400}
                    className=
                        "rounded-lg"
                    
                    alt="thumbnail"
                    priority
                    unoptimized
                />
            </motion.div>
        </>
    );
}
