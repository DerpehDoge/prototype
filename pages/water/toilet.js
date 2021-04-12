import nookies from "nookies";
import Tooltip from "@material-ui/core/Tooltip";
import MultipleChoice from "../../components/MultipleChoice";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <MultipleChoice
                href="/water/waterData"
                nextText="First data checkpoint."
                cookieName="toilet"
                names={"1,2,3,4,5".split(",")}
                classes="border-blue-200 border-blue-300 border-blue-400 border-blue-500 border-blue-600"
            >
                <h1>
                    How many times would you say you use the toilet in a day?
                </h1>
            </MultipleChoice>
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
