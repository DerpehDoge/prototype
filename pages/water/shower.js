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
                href="/"
                nextText="Head home."
                cookieName="shower"
                names={"4-6,6-8,8-10,10-12,12+,I don't take showers".split(",")}
                classes="border-green-500 border-green-300 border-yellow-100 border-red-300 border-red-500"
            >
                <h1>How long do you take showers for?</h1>
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
