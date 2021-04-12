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
        let { shower, age, members } = this.props;
        shower = "3,5,7,9,11,0".split(",")[shower];
        return (
            <div className="font-mono select-text">
                <h1>
                    The average household showerhead uses{" "}
                    <Source
                        href="https://www.sugargroveil.gov/download/Dept_PW/leaks_and_loss/home-showerwater-saving.pdf"
                        citation="pdf found here"
                    >
                        2.5 gallons per minute (gpm).
                    </Source>
                </h1>
                {shower !== 6 && (
                    <h2>
                        <E>NOTE: These are estimates.</E>
                        <br /> If you showered every day, this would equate to
                        about <E>30 showers per day.</E>
                        <br />
                        Every year would be <E>365</E> per year. <br />
                        Since you're {this.props.age} years old, this would
                        equate to <E>{365 * this.props.age}</E> showers.
                        <br />
                        You ALSO mentioned that you take{" "}
                        <E>{shower} minute long</E> showers.
                        <br /> This means that every shower, you use{" "}
                        <E>{shower * 2.5} gallons.</E>
                        <br />
                        Every month is <E>{shower * 2.5 * 30} gallons</E>,
                        <br />
                        and every year is{" "}
                        <E>{shower * 2.5 * 30 * 365} gallons</E>,
                        <br />
                        ending up at{" "}
                        <E>
                            {shower * 2.5 * 60 * 365 * this.props.age} gallons
                        </E>{" "}
                        in your lifetime.
                    </h2>
                )}
            </div>
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
