import "tailwindcss/tailwind.css";
import Head from "next/head";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimateSharedLayout>
            <motion.div className="overflow-hidden flex flex-col justify-center items-center select-none h-screen dark:bg-black dark:text-white">
                <Component {...pageProps} />
            </motion.div>
        </AnimateSharedLayout>
    );
}

export default MyApp;
