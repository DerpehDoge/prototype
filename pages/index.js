import { Component } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import nookies, { setCookie } from "nookies";
import Confetti from "react-confetti";
import Router from "next/router";

function CondConf(props) {
    if (props.cookies.confetti) {
        console.log("reached");
        return (
            <Confetti
                height={props.height}
                width={props.width}
                initialVelocityX={10}
                gravity={0.2}
                recycle={false}
                numberOfPieces={2000}
                // colors={[
                //     "#de6161",
                //     "#e0516e",
                //     "#de4380",
                //     "#d53994",
                //     "#c538ab",
                //     "#ab3fc2",
                //     "#814bd8",
                //     "#2657eb",
                // ]}
            />
        );
    } else {
        return null;
    }
}

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
                <CondConf
                    cookies={this.props}
                    height={this.state.height}
                    width={this.state.width}
                ></CondConf>
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
                            {this.props.name == "goose"
                                ? "honk honk"
                                : "Welcome back"}
                            {this.props.name !== "goose" && " "}
                            {this.props.gender &&
                            this.props.name !== "goose" ? (
                                this.props.gender == "Male" ? (
                                    "Mr. "
                                ) : this.props.gender == "Female" ? (
                                    "Mrs. "
                                ) : this.props.gender == "Attack Helicopter" ? (
                                    "heli "
                                ) : this.props.gender == "Other" ? (
                                    <>
                                        <span className="line-through">
                                            mr/mrs.
                                        </span>
                                        <span> </span>
                                    </>
                                ) : (
                                    ""
                                )
                            ) : (
                                ""
                            )}
                            {this.props.name !== "goose" && this.props.name}.
                        </h1>
                    ) : (
                        <h1 className="text-5xl">Welcome.</h1>
                    )}
                    <h3 className="text-xl my-4">
                        You've completed{" "}
                        {this.props.sections.split(",").length - 1} sections.
                        <br />
                        {this.props.confetti &&
                            "You've completed all your sections!"}
                    </h3>
                    {this.props.lastSection ? (
                        <div>
                            <Link href="/intro/name">
                                <a>
                                    <motion.span
                                        className="text-xl"
                                        whileTap={{
                                            fontSize: "16px",
                                        }}
                                    >
                                        Return back to beginning?
                                    </motion.span>
                                </a>
                            </Link>
                            <br></br>
                            <Link href={this.props.lastSection}>
                                <a>
                                    <motion.span
                                        className="text-xl"
                                        whileTap={{
                                            fontSize: "16px",
                                        }}
                                    >
                                        Go back to{" "}
                                        {this.props.lastSection
                                            .split("/")
                                            .pop()}
                                        ...
                                    </motion.span>
                                </a>
                            </Link>
                        </div>
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
                    <br />
                    <Link href="/data">
                        <motion.a
                            whileTap={{
                                scale: 0.8,
                            }}
                        >
                            wanna see the data?
                        </motion.a>
                    </Link>
                </motion.div>
                <br />
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    let cookies = nookies.get(ctx);
    //setCookie(null, "confetti", true);
    if ("sections" in cookies) {
        console.log("sections found :o");
        if (cookies.sections.split(",").length - 1 >= 5) {
            nookies.set(ctx, "confetti", true);
            cookies.confetti = true;
        }
        return { props: cookies };
    } else {
        console.log("sections not found :(");
        nookies.set(ctx, "sections", "");
        return {
            props: {
                sections: "",
            },
        };
    }
}
