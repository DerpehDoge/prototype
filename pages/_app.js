import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";
import { AppWrapper } from "../components/appWrapper";

function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <AnimateSharedLayout>
                <Component {...pageProps} />
            </AnimateSharedLayout>
        </AppWrapper>
    );
}

export default MyApp;
