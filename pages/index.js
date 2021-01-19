import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="dark flex justify-center items-center h-screen w-screen dark:bg-gray-700 dark:text-white overflow-hidden">
            <motion.h1
                initial={{ opacity: 0.8, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                    scale: 1.1,
                }}
                transition={{
                    duration: 0.25,
                }}
                className="text-3xl dark:bg-white dark: text-black  rounded-xl shadow p-10"
            >
                <Link href="/name">
                    <a>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            layoutId="welcome-text"
                        >
                            Welcome.
                        </motion.h1>
                    </a>
                </Link>
            </motion.h1>
            <motion.div
                transition={{
                    duration: 0.25,
                    type: "tween",
                }}
                initial={{
                    opacity: 1,
                    x: 0,
                }}
                animate={{
                    x: -200,
                    opacity: 0,
                    backgroundColor: "#E5E7EB",
                }}
                layoutId="homeButton"
                className="absolute bottom-0 left-0 flex justify-left p-5 bg-gray-200 color-black rounded-tr-lg text-black"
            >
                <i className="fas fa-home"></i>
                <h1>Return home.</h1>
            </motion.div>
        </div>
    );
}
