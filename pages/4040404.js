import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function err() {
    let x = 30;
    return (
        <>
            <motion.h1
                layout
                className="text-8xl font-mono text-red-400"
                animate={{
                    opacity: [1, 0.25],
                    translateX: 0,
                }}
                transition={{
                    ease: "anticipate",
                    duration: 3,
                    repeat: Infinity,
                }}
            >
                404
            </motion.h1>
            <h3>Looks like we couldn't find that.</h3>
            <Link href="/">
                <a>
                    <motion.h4
                        whileHover={{
                            scale: 1.1,
                        }}
                    >
                        Want to go back?
                    </motion.h4>
                </a>
            </Link>
        </>
    );
}
