import { motion } from "framer-motion";
import { setCookie } from "nookies";
import Link from "next/link";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let names = "Male.Female.Attack Helicopter.Prefer not to say.Other".split(
            "."
        );
        let classes = "border-blue-200 border-red-200 border-gray-700 border-purple-400 border-yellow-200".split(
            " "
        );
        return (
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
            >
                <h1 className="text-3xl text-yellow-200 pointer-events-none select-none p-3">
                    What's your gender?
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
                                    setCookie(null, "gender", a, {
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
                {this.state.selected && (
                    <Link href="/">
                        <a>
                            <h1>Back home.</h1>
                        </a>
                    </Link>
                )}
            </motion.div>
        );
    }
}
