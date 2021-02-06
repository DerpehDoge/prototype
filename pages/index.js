import { Component } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeButton from "../components/HomeButton";
import ContinueButton from "../components/Continue";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                style={{
                    overflow: "hidden",
                }}
                className="flex flex-col justify-center items-center select-none h-screen dark:bg-black dark:text-white"
            >
                <motion.h1
                    initial={{
                        opacity: 0,
                        translateX: -50,
                    }}
                    whileHover={{
                        scale: 1.1,
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                    animate={{
                        scale: 1,
                        translateX: 0,
                        opacity: 1,
                    }}
                    layoutId="welcome"
                    className="text-5xl"
                >
                    Welcome.
                </motion.h1>
                <br />
                <ContinueButton
                    href="/gender"
                    show={true}
                    name="Gender"
                ></ContinueButton>
            </div>
        );
    }
}
