import { motion } from "framer-motion";
import { setCookie, parseCookies } from "nookies";
import nookies from "nookies";
import Link from "next/link";
import Tooltip from "@material-ui/core/Tooltip";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let names = "2.0,2.25,2.5,2.75,3.0,I don't have a shower.".split(",");
        let classes = "border-green-500 border-green-300 border-yellow-100 border-red-300 border-red-500 border-gray-200".split(
            " "
        );
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
                    <h1 className="text-3xl text-yellow-600 dark:text-yellow-200 pointer-events-none select-none p-3">
                        What type of shower head do you have?
                    </h1>
                    <h3 className="text-center text-blue-200">
                        the standard is 2.5
                        <Tooltip title="gallons per minute">
                            <h1 className="text-yellow-100 inline">gpm,</h1>
                        </Tooltip>{" "}
                        so please choose the nearest option:
                    </h3>
                    <br className="select-none" />
                    <ul>
                        {names.map((a) => {
                            return (
                                <motion.li
                                    drag="x"
                                    dragConstraints={{
                                        right: 0,
                                        left: 0,
                                    }}
                                    dragTransition={{
                                        bounceDamping: 10,
                                        bounceStiffness: 20,
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
                                        setCookie(null, "shower", a, {
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
                                    if (sections.includes("shower") == false) {
                                        sections.push("shower");
                                    }
                                    setCookie(
                                        null,
                                        "sections",
                                        sections.join(",")
                                    );
                                }}
                            >
                                head back home.
                            </a>
                        </div>
                    </Link>
                )}
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    console.log();
    nookies.set(ctx, "lastSection", "/water/shower", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);

    return { props: cookies };
}
