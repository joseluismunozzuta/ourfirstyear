"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Loader() {

    return (

        <div className="place-items-center grid bg-opacity-35 bg-black backdrop-filter 
                backdrop-blur-xl backdrop-opacity-95 fixed top-0 right-0 h-screen w-screen z-50 justify-center items-center">
            <div className="loader"></div>
        </div>)
        ;
}


