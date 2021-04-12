import { Component } from "react";
import Confetti from "react-confetti";
import Link from "next/link";
import { parseCookies, setCookie } from "nookies";

export default class Range extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, amount: this.props.min };
        this.change = this.change.bind(this);
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

    change(event) {
        setCookie(null, this.props.cookie, event.target.value, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
        this.setState({
            amount: event.target.value,
        });
    }

    render() {
        return (
            <>
                {this.state.amount == 69 && (
                    <Confetti
                        height={this.props.height}
                        width={this.props.width}
                        initialVelocityY={-10}
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
                )}
                <div
                    className="text-center transition-transform duration-500 ease-out"
                    style={{
                        transform: `rotate(${
                            (this.state.amount - this.props.min) *
                            (10 / (this.props.max - this.props.min))
                        }deg) scale(${
                            this.state.amount *
                                (0.7 / (this.props.max - this.props.min)) +
                            1
                        })`,
                    }}
                >
                    {this.props.children}
                    <h1 className="text-xl transform text-center font-bold">
                        {this.state.amount}
                    </h1>
                    <input
                        value={this.state.amount}
                        type="range"
                        min={this.props.min}
                        max={this.props.max}
                        onChange={this.change}
                    ></input>
                    <br />
                    {this.state.amount && (
                        <Link href="/">
                            <div>
                                <a
                                    onClick={() => {
                                        let cookies = parseCookies();
                                        let sections = cookies.sections.split(
                                            ","
                                        );
                                        if (
                                            sections.includes(
                                                this.props.cookie
                                            ) == false
                                        ) {
                                            sections.push(this.props.cookie);
                                        }
                                        setCookie(
                                            null,
                                            "sections",
                                            sections.join(",")
                                        );
                                    }}
                                >
                                    <Link href={this.props.href}>
                                        <a>{this.props.text}</a>
                                    </Link>
                                </a>
                            </div>
                        </Link>
                    )}
                </div>
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    nookies.set(ctx, "lastSection", "/intro/name", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);
    return { props: cookies };
}
