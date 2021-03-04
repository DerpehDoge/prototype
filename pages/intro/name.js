import { motion } from "framer-motion";
import React from "react";
import nookies from "nookies";
import { parseCookies, setCookie } from "nookies";
import Link from "next/link";

export default class A extends React.Component {
    constructor(props) {
        super(props);
    }

    finishSection() {
        let cookies = parseCookies();
        setCookie(null, "sections", parseInt(cookies.sections) + 1, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
    }

    render() {
        return (
            <>
                <motion.h1>Welcome.</motion.h1>
                <button onClick={this.finishSection}>
                    Finish this section.
                </button>
                <Link href="/">
                    <a>honk</a>
                </Link>
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    console.log();
    nookies.set(ctx, "lastSection", "/intro/name", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    return { props: {} };
}
