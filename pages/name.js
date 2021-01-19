import Head from "next/head";
import Link from "next/link";
import HomePage from "../components/home";
import { motion } from "framer-motion";

export default function Home() {
    let names = "Male Female Neither".split(" ");
    return (
        <div className="dark flex flex-col justify-center items-center h-screen w-screen dark:bg-gray-700 dark:text-white overflow-hidden">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
            >
                <h1>What's your gender?</h1>
                <br />
                <ul>
                    {names.map((a) => {
                        return (
                            <motion.li
                                key={a}
                                whileHover={{
                                    originX: 0,
                                    scale: 1.3,
                                }}
                                className={`my-4 border-l-4 pl-5 text-2xl ${
                                    "border-blue-200 border-red-200 border-gray-200".split(
                                        " "
                                    )[names.indexOf(a)]
                                }`}
                                transition={{
                                    duration: 0.25,
                                    stiffness: 200,
                                    type: "spring",
                                }}
                            >
                                {a}
                            </motion.li>
                        );
                    })}
                </ul>
                <HomePage></HomePage>
            </motion.div>
        </div>
    );
}
