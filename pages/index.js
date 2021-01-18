import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="dark flex justify-center items-center h-screen w-screen dark:bg-gray-700 dark:text-white overflow-hidden">
            <motion.h1
                initial={{ opacity: 0.8, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                }}
                className="text-3xl dark:bg-white dark: text-black  rounded-xl shadow p-10"
            >
                <Link href="/">
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
        </div>
    );
}
