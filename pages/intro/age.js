import Range from "../../components/Range";
import nookies from "nookies";
import Confetti from "react-confetti";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <Range
                    cookie="age"
                    min="13"
                    max="100"
                    href="members"
                    text="Head to the members page?"
                >
                    <h1 className="font-mono text-3xl">How old are you?</h1>
                </Range>
            </>
        );
    }
}

export async function getServerSideProps(ctx) {
    console.log();
    nookies.set(ctx, "lastSection", "/intro/age", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);

    return { props: cookies };
}
