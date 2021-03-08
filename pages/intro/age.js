import { motion } from "framer-motion";
import { setCookie, parseCookies } from "nookies";
import nookies from "nookies";
import Link from "next/link";

class MyLink extends React.Component {
    render() {
        const { onCustomClick, ...props } = this.props;
        return <a {...props} onClick={this.handleClick} />;
    }

    handleClick = (event) => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }

        if (this.props.onCustomClick) {
            this.props.onCustomClick(event);
        }
    };
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let names = "13-25.25-35.35-50.50-60.60+".split(".");
        let classes = "border-blue-200 border-red-200 border-gray-700 border-purple-400 border-yellow-200".split(
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
                    <h1 className="text-3xl text-yellow-200 pointer-events-none select-none p-3">
                        What's your age range?
                    </h1>
                    <br className="select-none" />
                    <ul>
                        {names.map((a) => {
                            return (
                                <motion.li
                                    key={a}
                                    whileHover={{
                                        originX: 0,
                                        scale: 1.3,
                                        color: "#D1FAE5",
                                    }}
                                    className={`my-4 select-none cursor-pointer border-l-4 pl-5 text-2xl ${
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
                                        setCookie(null, "age", a, {
                                            maxAge: 30 * 24 * 60 * 60,
                                            path: "/",
                                        });
                                    }}
                                >
                                    <span
                                        className={
                                            this.state.selected == a
                                                ? "text-black dark:text-white"
                                                : "text-gray-600 dark:text-gray-400"
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
                                    if (sections.includes("age") == false) {
                                        sections.push("age");
                                    }
                                    setCookie(
                                        null,
                                        "sections",
                                        sections.join(",")
                                    );
                                }}
                            >
                                <h1>Back home.</h1>
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
    nookies.set(ctx, "lastSection", "/intro/age", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);

    return { props: cookies };
}
