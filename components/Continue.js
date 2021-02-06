import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default class ContinueButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.state.showing = !this.state.showing;
    }

    componentDidMount() {
        this.setState({
            showing: this.props.show || false,
        });
    }

    render() {
        return (
            <div>
                {this.state.showing && (
                    <Link href={this.props.href}>
                        <a>
                            <motion.div
                                className="p-3"
                                whileHover={{
                                    scale: 1.1,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                                initial={{
                                    opacity: 0,
                                    transformX: 50,
                                }}
                                animate={{
                                    scale: 1,
                                    transformX: 0,
                                    opacity: 1,
                                }}
                                className="dark:text-green-200"
                                layoutId={this.props.href}
                            >
                                <h3 className="text-2xl">
                                    Continue to:
                                    <span className="text-4xl font-bold italic">
                                        {" " + this.props.name}
                                    </span>
                                </h3>
                            </motion.div>
                        </a>
                    </Link>
                )}
            </div>
        );
    }
}
