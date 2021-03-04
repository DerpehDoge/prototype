import { Component } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import nookies from "nookies";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateX: -50,
                    }}
                    animate={{
                        scale: 1,
                        translateX: 0,
                        opacity: 1,
                    }}
                    className="text-center"
                >
                    <motion.h1 layout className="text-5xl" layoutId="title">
                        Welcome.
                    </motion.h1>
                    <h3 className="text-xl my-4">
                        You've completed{" "}
                        <span className="m-0 p-0 font-mono text-yellow-200">
                            {this.props.sections == 0
                                ? "no"
                                : this.props.sections}{" "}
                        </span>
                        sections.
                    </h3>
                    {this.props.lastSection ? (
                        <Link href={this.props.lastSection}>
                            <a>
                                <motion.span
                                    whileHover={{
                                        scale: 1.3,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                >
                                    Continue back to{" "}
                                    {this.props.lastSection.split("/").pop()}...
                                </motion.span>
                            </a>
                        </Link>
                    ) : (
                        <Link href="/intro/name">
                            <motion.a
                                whileHover={{
                                    scale: 1.1,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                            >
                                Shall we begin?
                            </motion.a>
                        </Link>
                    )}
                </motion.div>
                <br />
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    // Parse
    // const cookies = nookies.get(ctx);

    let cookies = nookies.get(ctx);
    if ("sections" in cookies == false) {
        nookies.set(ctx, "sections", 0, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
        cookies = nookies.get(ctx);
    }
    // // Set
    return { props: cookies };
}
