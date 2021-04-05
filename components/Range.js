import { Component } from "react";

export default class Range extends Component {
    constructor(props) {
        super(props);
        this.state = { amount: 25 };
        this.change = this.change.bind(this);
    }

    change(event) {
        this.setState({
            amount: event.target.value,
        });
    }

    render() {
        return (
            <div
                style={{
                    transform: `rotate(${
                        Math.sin(this.state.amount) * 6
                    }deg) scale(${this.state.amount / 50 + 1})`,
                }}
            >
                {this.props.children}
                <h1 className="text-xl transform text-center font-bold">
                    {this.state.amount}
                </h1>
                <input
                    value={this.state.amount}
                    type="range"
                    min="0"
                    max="120"
                    onChange={this.change}
                ></input>
            </div>
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
