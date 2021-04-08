import nookies, { setCookie } from "nookies";
import React from "react";
import Source from "../../components/Source";
import Tooltip from "@material-ui/core/Tooltip";

class Emphasis extends React.Component {
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
        shower = parseInt(shower);
        let sMin, sMax;
        if (shower < 5) {
            [sMin, sMax] = "4-6,6-8,8-10,10-12"
                .split(",")
                [shower - 1].split("-");
        } else if (shower == 5) {
            sMin = 12;
        } else {
        }
        console.log(sMin, sMax);
        return (
            <div className="font-mono">
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
                        If you showered every day, this would equate to about{" "}
                        <Emphasis>30 showers per day.</Emphasis>
                        <br />
                        Every year would be <Emphasis>365</Emphasis> per year.{" "}
                        <br />
                        Since you're {this.props.age} years old, this would
                        equate to <Emphasis>{365 * this.props.age}</Emphasis>{" "}
                        showers.
                        <br />
                        You ALSO mentioned that you take{" "}
                        <Emphasis>
                            {`${sMin}${shower < 5 ? "-" : ""}${
                                sMax ? sMax : shower == 6 ? "" : "+"
                            }`}{" "}
                            minute long
                        </Emphasis>{" "}
                        showers.
                    </h2>
                )}
            </div>
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
