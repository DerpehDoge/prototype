import nookies, { setCookie } from "nookies";
import React from "react";
import Source from "../../components/Source";
import Tooltip from "@material-ui/core/Tooltip";

class E extends React.Component {
    render() {
        return (
            <span className="dark:text-blue-300 text-blue-500 italic font-bold">
                {this.props.children}
            </span>
        );
    }
}

export default class Data extends React.Component {
    render() {
        let { shower, age, toilet, dishwasher } = this.props;
        shower = "3,5,7,9,11,0".split(",")[shower];
        return (
            <>
                <style jsx>
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
                <table className="text-center text-2xl">
                    <tr>
                        <th></th>
                        <th>1 day</th>
                        <th>1 month</th>
                        <th>1 year</th>
                        <th>lifetime</th>
                    </tr>
                    <tr>
                        <td className="row">shower usage</td>
                        <td>{shower * 2.5}</td>
                        <td>{shower * 2.5 * 30}</td>
                        <td>{shower * 2.5 * 365}</td>
                        <td>{shower * 2.5 * 365 * age}</td>
                    </tr>
                    <tr>
                        <td className="row">toilet usage</td>
                        <td>{toilet * 1.5}</td>
                        <td>{toilet * 1.5 * 30}</td>
                        <td>{toilet * 1.5 * 365}</td>
                        <td>{toilet * 1.5 * 365 * age}</td>
                    </tr>
                    <tr>
                        <td className="row">dishwasher usage</td>
                        <td>{dishwasher / 10}</td>
                        <td>{dishwasher * 3}</td>
                        <td>{12 * (dishwasher * 3)}</td>
                        <td>{12 * age * (dishwasher * 3)}</td>
                    </tr>
                    <tr>
                        <td className="row">total</td>
                        <td>{shower * 2.5 + toilet * 1.5 + dishwasher / 10}</td>
                        <td>
                            {30 *
                                (shower * 2.5 + toilet * 1.5 + dishwasher / 1)}
                        </td>
                        <td>
                            {365 *
                                (shower * 2.5 + toilet * 1.5 + dishwasher / 1)}
                        </td>
                        <td>
                            {365 *
                                age *
                                (shower * 2.5 + toilet * 1.5 + dishwasher / 1)}
                        </td>
                    </tr>
                </table>
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    nookies.set(ctx, "lastSection", "/water/waterData", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);
    return { props: cookies };
}
