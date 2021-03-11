import { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import nookies, { setCookie, getCookie } from "nookies";

export default class extends Component {
    render() {
        return (
            <>
                <div className="select-text">
                    <h1>
                        Hey there. You are 1 person out of 328.2 million people
                        in the US.
                    </h1>
                    {/* shower */}
                    {this.props.shower &&
                        this.props.shower !== "I don't have a shower." && (
                            <h2>
                                <br />
                                <h1 className="font-mono text-3xl text-blue-300">
                                    water
                                </h1>
                                You mentioned you use a{" "}
                                <span className="font-mono text-blue-200">
                                    {this.props.shower}
                                </span>{" "}
                                gps showerhead.
                                <br />
                                Assuming you take an 8 minute shower, this means
                                that you use{" "}
                                <span className="font-mono text-blue-200">
                                    {this.props.shower * 8}
                                </span>{" "}
                                gallons.
                                <br />
                                If you take a shower every day, this ends up
                                becoming{" "}
                                <span className="font-mono text-blue-200">
                                    {this.props.shower * 8 * 365}
                                </span>{" "}
                                gallons per year.
                                <br />
                                The average price of water is around $1.5 per
                                1000 gallons.
                                <br />
                                This means that you use{" "}
                                <span className="font-mono text-blue-200">
                                    $
                                    {(
                                        ((this.props.shower * 8 * 365) / 1000) *
                                        1.5
                                    ).toFixed(2)}
                                </span>{" "}
                                per year just showering.
                                {this.props.age && (
                                    <h2>
                                        <h1>
                                            You mentioned that you were within
                                            age range{" "}
                                            <span className="font-mono text-blue-200">
                                                {this.props.age}
                                            </span>
                                            .
                                        </h1>
                                        <h1>
                                            Assuming that you shower every day
                                            for every year of your life,
                                        </h1>
                                        <h1>
                                            you would shower{" "}
                                            <span className="font-mono text-blue-200">
                                                {this.props.age !== "60+"
                                                    ? this.props.age.split(
                                                          "-"
                                                      )[0] *
                                                          365 +
                                                      "-" +
                                                      this.props.age.split(
                                                          "-"
                                                      )[1] *
                                                          365
                                                    : 60 * 365 + "+"}
                                            </span>{" "}
                                            times.
                                        </h1>
                                        <h1>
                                            This means that you will use{" "}
                                            <span className="font-mono text-blue-200">
                                                {this.props.age !== "60+"
                                                    ? this.props.age.split(
                                                          "-"
                                                      )[0] *
                                                          8 *
                                                          this.props.shower *
                                                          365 +
                                                      "-" +
                                                      this.props.age.split(
                                                          "-"
                                                      )[1] *
                                                          8 *
                                                          this.props.shower *
                                                          365
                                                    : 60 *
                                                          8 *
                                                          this.props.shower *
                                                          365 +
                                                      "+"}
                                            </span>{" "}
                                            gallons within your lifetime,
                                            <br /> assuming all previous
                                            statements are true.
                                        </h1>
                                    </h2>
                                )}
                            </h2>
                        )}
                </div>
                <br />
                <Link href="/">
                    <motion.a
                        whileTap={{
                            scale: 0.8,
                        }}
                    >
                        Let's head home.
                    </motion.a>
                </Link>
            </>
        );
    }
}

export const getServerSideProps = async (ctx) => {
    const cookies = await nookies.get(ctx);
    console.log(cookies);
    return {
        props: {
            ...cookies,
        },
    };
};
