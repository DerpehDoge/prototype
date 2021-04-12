import nookies from "nookies";
import Tooltip from "@material-ui/core/Tooltip";
import Range from "../../components/Range";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Range
                cookie="dishwasher"
                min="0"
                max="10"
                href="/water/waterData"
                text="water time B)"
            >
                <h1 className="font-mono text-3xl">
                    How often do you say that you use
                    <br /> the dishwasher in a month?
                </h1>
            </Range>
        );
    }
}

export async function getServerSideProps(ctx) {
    console.log();
    nookies.set(ctx, "lastSection", "/water/shower", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);

    return { props: cookies };
}
