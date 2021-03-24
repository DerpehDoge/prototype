import MultipleChoice from "../../components/MultipleChoice";
import nookies from "nookies";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <MultipleChoice
                href="/intro/members"
                nextText="Head  to members."
                cookieName="age"
                names="13-25.25-35.35-50.50-60.60+"
                classes="border-blue-300 border-blue-400 border-blue-500 border-blue-600 border-blue-700"
            >
                <h1 class="text-2xl text-blue-200">How old are you?</h1>
            </MultipleChoice>
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
