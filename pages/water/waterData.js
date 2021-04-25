import { motion } from "framer-motion";
import nookies, { setCookie } from "nookies";
import React from "react";
import Source from "../../components/Source";
import Tooltip from "@material-ui/core/Tooltip";

class TD extends React.Component {
    render() {
        return (
            <motion.td
                className={this.props.className ? this.props.className : "td"}
            >
                <motion.div
                    whileHover={{
                        padding: "20px",
                        scale: 1.3,
                    }}
                    className="text"
                    whileTap={{
                        scale: 1.1,
                        padding: "10px",
                    }}
                    transition={{
                        ease: "backOut",
                        // ease: [0.16, 1, 0.3, 1],
                        duration: 0.3,
                    }}
                >
                    {this.props.children}
                </motion.div>
            </motion.td>
        );
    }
}

class E extends React.Component {
    render() {
        return (
            <span className="dark:text-blue-300 text-blue-500 italic font-bold">
                {this.props.children}
            </span>
        );
    }
}

export default class data extends React.Component {
    render() {
        let { shower, age, toilet, dishwasher, drinking } = this.props;
        shower = parseInt("3,5,7,9,11,0".split(",")[shower - 1]);
        toilet = parseInt(toilet);
        dishwasher = parseInt(dishwasher);
        drinking = parseInt(drinking) * 0.0625;
        let dailyWater = parseInt(
            shower * 2.5 + toilet * 1.5 + (dishwasher / 30) * 6 + drinking
        );
        return (
            <>
                <style jsx global>
                    {`
                        th {
                            padding: 16px;
                            font-weight: 500;
                            font-size: 1.25em;
                        }
                        td :not(.row) {
                            background-color: rgba(240, 248, 255, 0.2);
                            padding: 6px;
                            font-family: monospace;
                        }
                        .row {
                            font-family: monospace;
                            padding: 12px;
                            font-weight: 700;
                            font-size: 1.1em;
                        }
                    `}
                </style>
                <h1 className="text-5xl font-mono m-5">
                    NOTE: all numbers are in gallons.
                </h1>
                <table className="text-center text-2xl">
                    <tr>
                        <th></th>
                        <th>1 day</th>
                        <th>1 month</th>
                        <th>1 year</th>
                        <th>10 years</th>
                        <th>{this.props.age} years</th>
                    </tr>
                    <tr>
                        <td className="row">shower usage</td>
                        <TD>{shower * 2.5}</TD>
                        <TD>{shower * 2.5 * 30}</TD>
                        <TD>{shower * 2.5 * 365}</TD>
                        <TD>{shower * 2.5 * 265 * 10}</TD>
                        <TD>{shower * 2.5 * 365 * age}</TD>
                    </tr>
                    <tr>
                        <td className="row">toilet usage</td>
                        <TD>{toilet * 1.5}</TD>
                        <TD>{toilet * 1.5 * 30}</TD>
                        <TD>{toilet * 1.5 * 365}</TD>
                        <TD>{toilet * 1.5 * 365 * 10}</TD>
                        <TD>{toilet * 1.5 * 365 * age}</TD>
                    </tr>
                    <tr>
                        <td className="row">dishwasher usage</td>
                        <TD>{((dishwasher / 30) * 6).toFixed(2)}</TD>
                        <TD>{dishwasher * 6}</TD>
                        <TD>{12 * (dishwasher * 6)}</TD>
                        <TD>{12 * (dishwasher * 6) * 10}</TD>
                        <TD>{12 * age * (dishwasher * 6)}</TD>
                    </tr>
                    <tr>
                        <td className="row">drinking usage</td>
                        <TD>{drinking.toFixed(2)}</TD>
                        <TD>{(drinking * 30).toFixed(2)}</TD>
                        <TD>{(drinking * 365).toFixed(2)}</TD>
                        <TD>{(drinking * 365 * 10).toFixed(2)}</TD>
                        <TD>{(drinking * age * 365).toFixed(2)}</TD>
                    </tr>
                    <tr>
                        <td className="row">total</td>
                        <TD>{dailyWater}</TD>
                        <TD>{dailyWater * 30}</TD>
                        <TD>{dailyWater * 365}</TD>
                        <TD>{365 * dailyWater * 10}</TD>
                        <TD>{365 * age * dailyWater}</TD>
                    </tr>
                </table>
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    nookies.set(ctx, "lastSection", "/water/waterTD", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);
    return { props: cookies };
}
