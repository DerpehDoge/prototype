import Head from "next/head";
import Link from "next/link";
import HomeButton from "../components/home";
import { motion } from "framer-motion";

export default function Home() {
    let names = "Male.Female.Attack Helicopter.Prefer not to say.Other".split(
        "."
    );
    let classes = "border-blue-200 border-red-200 border-gray-700 border-purple-400 border-yellow-200".split(
        " "
    );
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen dark:bg-gray-900 dark:text-white overflow-hidden">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
            >
                <h1 className="text-2xl shadow-md p-5 bg-gray-400 text-black rounded-lg">
                    What's your gender?
                </h1>
                <br />
                <ul>
                    {names.map((a) => {
                        return (
                            <motion.li
                                key={a}
                                whileHover={{
                                    originX: 0,
                                    scale: 1.3,
                                    color: "#D1FAE5",
                                }}
                                className={`my-4 text-black dark:text-white select-none cursor-pointer border-l-4 pl-5 text-2xl ${
                                    classes[names.indexOf(a)]
                                }`}
                                transition={{
                                    duration: 0.25,
                                    stiffness: 300,
                                    type: "spring",
                                }}
                            >
                                {a}
                            </motion.li>
                        );
                    })}
                </ul>
                <HomeButton></HomeButton>
            </motion.div>
        </div>
    );
}
