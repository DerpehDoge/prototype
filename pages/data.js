import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import nookies, { setCookie, getCookie } from "nookies";

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
                        Back to Home.
                    </motion.a>
                </Link>
            </>
        );
    }
}

export const getServerSideProps = async (ctx) => {
    const cookies = await nookies.get(ctx);
    console.log(cookies);
    let water = {};
    if (cookies.shower) {
        water.gallons = cookies.shower * 8;
        water.yearly = water.gallons * 365;
        water.price = (water.yearly / 1000) * 1.5;
    }
    return {
        props: {
            ...cookies,
            water,
        },
    };
};
