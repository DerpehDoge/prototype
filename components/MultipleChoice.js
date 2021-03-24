import { Component } from "react";
import { motion } from "framer-motion";
import { setCookie, parseCookies } from "nookies";
import Link from "next/link";
export default class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {
            href = "/",
            nextText = "devs forgot text B)",
            cookieName = "youForgotSauce",
            names = "You.Forgot.The.Sauce.",
            classes = "border-gray-100 border-gray-300 border-gray-500 border-gray-700",
        } = this.props;
        if (typeof names !== "object") {
            names = names.split(".");
        }
        classes = classes.split(" ");
        return (
            <>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    {this.props.children}
                    <br className="select-none" />
                    <ul>
                        {names.map((a) => {
                            return (
                                <motion.li
                                    drag
                                    dragConstraints={{
                                        right: 0,
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                    }}
                                    dragTransition={{
                                        bounceDamping: 6,
                                        bounceStiffness: 40,
                                    }}
                                    dragElastic={0.2}
                                    key={a}
                                    whileHover={{
                                        originX: 0,
                                        scale: 1.1,
                                        color: "#D1FAE5",
                                        letterSpacing: "1.2px",
                                    }}
                                    className={`my-4 select-none font-mono cursor-pointer border-l-4 pl-5 text-2xl ${
                                        classes[names.indexOf(a)]
                                    }`}
                                    transition={{
                                        duration: 0.25,
                                        stiffness: 300,
                                        type: "spring",
                                    }}
                                    onClick={() => {
                                        this.setState({
                                            selected: a,
                                        });
                                        setCookie(null, cookieName, a, {
                                            maxAge: 30 * 24 * 60 * 60,
                                            path: "/",
                                        });
                                    }}
                                >
                                    <span
                                        className={
                                            this.state.selected == a
                                                ? "text-black dark:text-white"
                                                : `text-gray-600 dark:text-gray-400`
                                        }
                                    >
                                        {a}
                                    </span>
                                </motion.li>
                            );
                        })}
                    </ul>
                </motion.div>
                {this.state.selected && (
                    <Link href="/">
                        <div>
                            <a
                                onClick={() => {
                                    let cookies = parseCookies();
                                    let sections = cookies.sections.split(",");
                                    if (
                                        sections.includes(cookieName) == false
                                    ) {
                                        sections.push(cookieName);
                                    }
                                    setCookie(
                                        null,
                                        "sections",
                                        sections.join(",")
                                    );
                                }}
                            >
                                <Link href={href}>
                                    <a>{nextText}</a>
                                </Link>
                            </a>
                        </div>
                    </Link>
                )}
            </>
        );
    }
}
