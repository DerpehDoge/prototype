import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
    return (
        <AnimateSharedLayout>
            <Component {...pageProps} />
        </AnimateSharedLayout>
    );
}

export default MyApp;
