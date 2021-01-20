import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
    return (
        <motion.div
            initial={{
                opacity: 0.5,
                x: -20,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.1,
            }}
            layoutId="homeButton"
            className="absolute bottom-0 left-0 flex justify-left p-5 bg-gray-200 color-black rounded-tr-lg text-black"
        >
            <Link href="/">
                <a className="">
                    <i className="fas fa-home"></i>
                    <h1>Return home.</h1>
                </a>
            </Link>
        </motion.div>
    );
}
