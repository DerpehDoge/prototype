import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import nookies, { setCookie, getCookie } from "nookies";
import Head from "next/head";


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="select-text">
                    <h1>
                        Hey there. You are 1 person out of 328.2 million people
                        in the US.
                    </h1>
                </div>
                <br />
                <Link href="/">
                    <motion.a
                        whileTap={{
                            scale: 0.8,
                        }}
                    >
                        return home.
                    </motion.a>
                </Link>
            </>
        );
    }
}

export const getServerSideProps = async (ctx) => {
    const cookies = await nookies.get(ctx);
    console.log(cookies);
    return {
        props: {
            ...cookies,
        },
    };
};
