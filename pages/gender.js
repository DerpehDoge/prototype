import React from "react";
import { motion } from "framer-motion";
import HomeButton from "../components/HomeButton";
import Choice from "../components/Choice";

export default function Gender(pageProps) {
    return (
        <>
            <div className="flex justify-center items-center select-none h-screen dark:bg-black dark:text-white">
                <h1 className="text-3xl">What's your gender?</h1>
                <Choice choose={() => {}}>Woman</Choice>
                <HomeButton></HomeButton>
            </div>
        </>
    );
}
