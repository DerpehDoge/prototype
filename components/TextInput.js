import React from "react";
import nookies from "nookies";
import { parseCookies, setCookie } from "nookies";
import anime from "animejs";
import Router from "next/router";

export default class Name extends React.Component {
    constructor(props) {
        super(props);
        this.finishSection = this.finishSection.bind(this);
        this.change = this.change.bind(this);
    }

    finishSection(event) {
        let cookie = this.props.cookie;
        let target = this.props.target;
        event.preventDefault();
        let cookies = parseCookies();
        let sections = cookies.sections.split(",");
        if (sections.includes(cookie) == false) {
            sections.push(cookie);
        }
        setCookie(null, "sections", sections.join(","));
        console.log("section finished");
        anime({
            targets: ".nTex",
            opacity: 0,
        });
        anime({
            targets: "#formKEK",
            scale: 2.0,
            easing: "easeOutExpo",
            duration: 500,
            y: -60,
        });
        setTimeout(() => Router.replace(target), 750);
    }

    change(event) {
        setCookie(null, this.props.cookie, event.target.value, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
        console.log(event.target.value);
    }

    render() {
        return (
            <>
                <div class="nTex text-black dark:text-white text-center">
                    {this.props.children}
                </div>
                <form id="formKEK" onSubmit={this.finishSection}>
                    <input
                        type="text"
                        className="my-4 bg-transparent dark:text-white text:black text-center font-mono border-opacity-25 p-2 text-2xl dark:border-blue-500 border-blue-800 border-2 rounded-md outline-none"
                        autoComplete="off"
                        placeholder={
                            this.props.placeholder ? this.props.placeholder : ""
                        }
                        onChange={this.change}
                    />
                </form>
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
