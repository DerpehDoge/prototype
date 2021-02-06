import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeButton(pageProps) {
    return (
        <div>
            <Link href="/">
                <a>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        className="p-3"
                        className="absolute bottom-0 left-0 p-5 text-m rounded-tr-lg bg-gray-800"
                        layoutId="homeButton"
                    >
                        <h1>Return home.</h1>
                    </motion.div>
                </a>
            </Link>
        </div>
    );
}
