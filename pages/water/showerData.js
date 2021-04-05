import nookies, { setCookie } from "nookies";
import React from "react";

export default class Data extends React.Component {
    render() {
        return (
            <>
                {this.props.shower ? (
                    <h1>
                        You've mentioned that you use a {this.props.shower}{" "}
                        showerhead.
                    </h1>
                ) : (
                    <h1>You don't have a showerhead. Great.</h1>
                )}
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    nookies.set(ctx, "lastSection", "/water/showerData", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);
    return { props: cookies };
}
