import nookies from "nookies";
import Range from "../../components/Range";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Range
                cookie="drinking"
                min="0"
                max="30"
                href="/water/waterData"
                text="yay data"
            >
                <h1 className="font-mono text-3xl">
                    How many glasses of water
                    <br /> do you drink per day?
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
