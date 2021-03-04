import { motion } from "framer-motion";
import React from "react";
import nookies from "nookies";
import { parseCookies, setCookie } from "nookies";
import Link from "next/link";
import anime from "animejs";
import { useRouter } from "next/router";
import Router from "next/router";

export default class A extends React.Component {
    constructor(props) {
        super(props);
    }

    finishSection(event) {
        event.preventDefault();
        let cookies = parseCookies();
        setCookie(null, "sections", parseInt(cookies.sections) + 1, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
        console.log("section finished");
        anime({
            targets: ".nTex",
            opacity: 0,
        });
        anime({
            targets: "#formKEK",
            scale: 2,
            easing: "easeOutExpo",
            duration: 1000,
            y: -60,
        });
        setTimeout(() => Router.replace("/intro/gender"), 1500);
    }

    setName(event) {
        setCookie(null, "name", event.target.value, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
        });
        console.log(event.target.value);
    }

    render() {
        return (
            <>
                <h1 className="text-5xl nTex">Hey there.</h1>
                <h2 className="my-4 text-2xl nTex">What's your name?</h2>
                <form id="formKEK" onSubmit={this.finishSection}>
                    <input
                        type="text"
                        className="my-4 bg-transparent text-white text-center font-mono border-opacity-25 p-2 text-2xl border-blue-500 border-2 rounded-md outline-none"
                        autoComplete="off"
                        placeholder={this.props.name}
                        onChange={this.setName}
                    />
                </form>
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    console.log();
    nookies.set(ctx, "lastSection", "/intro/name", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    return { props: cookies };
}
