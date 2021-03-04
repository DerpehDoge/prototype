import { Component } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import nookies from "nookies";
import Confetti from "react-confetti";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
                    {this.props.name ? (
                        <h1 className="text-5xl">
                            Welcome back{" "}
                            {this.props.gender
                                ? this.props.gender == "Male"
                                    ? "Mr. "
                                    : this.props.gender == "Female"
                                    ? "Mrs. "
                                    : ""
                                : ""}
                            {this.props.name}.
                        </h1>
                    ) : (
                        <h1 className="text-5xl">Welcome.</h1>
                    )}
                    <h3 className="text-xl my-4">
                        You've completed{" "}
                        {this.props.sections == 0 ? "no" : this.props.sections}{" "}
                        sections.
                    </h3>
                    {this.props.lastSection ? (
                        <Link href={this.props.lastSection}>
                            <a>
                                <motion.span
                                    className="text-xl"
                                    whileTap={{
                                        fontSize: "16px",
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
                                className="text-xl"
                                whileTap={{
                                    fontSize: "16px",
                                }}
                            >
                                Let's start.
                            </motion.a>
                        </Link>
                    )}
                </motion.div>
                <Confetti
                    height={this.state.height}
                    width={this.state.width}
                    initialVelocityX={6}
                    recycle={false}
                    numberOfPieces={100}
                    colors={[
                        "#de6161",
                        "#e0516e",
                        "#de4380",
                        "#d53994",
                        "#c538ab",
                        "#ab3fc2",
                        "#814bd8",
                        "#2657eb",
                    ]}
                />
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
