import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import nookies, { setCookie, getCookie } from "nookies";

export default class extends Component {
    render() {
        return (
            <>
                <div className="select-text">
                    <h1>
                        Hey there. You are 1 person out of 328.2 million people
                        in the US.
                    </h1>
                    {this.props.shower &&
                        this.props.shower !== "I don't have a shower." && (
                            <h2>
                                You mentioned you use a{" "}
                                <span className="font-mono text-blue-200">
                                    {this.props.shower}
                                </span>{" "}
                                gps showerhead.
                                <br />
                                Assuming you take an 8 minute shower, this means
                                that you use{" "}
                                <span className="font-mono text-blue-200">
                                    {this.props.shower * 8}
                                </span>{" "}
                                gallons.
                                <br />
                                If you take a shower every day, this ends up
                                becoming{" "}
                                <span className="font-mono text-blue-200">
                                    {this.props.shower * 8 * 365}
                                </span>{" "}
                                gallons per year.
                                <br />
                                The average price of water is around $1.5 per
                                1000 gallons.
                                <br />
                                This means that you use{" "}
                                <span className="font-mono text-blue-200">
                                    $
                                    {(
                                        ((this.props.shower * 8 * 365) / 1000) *
                                        1.5
                                    ).toFixed(2)}
                                </span>{" "}
                                per year just showering.
                            </h2>
                        )}
                </div>
                <br />
                <Link href="/">
                    <motion.a
                        whileTap={{
                            scale: 0.8,
                        }}
                    >
                        Let's head home.
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
