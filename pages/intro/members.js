import nookies from "nookies";
import MultipleChoice from "../../components/MultipleChoice";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <MultipleChoice
                href="/water/introduction"
                nextText="New section: 'water'"
                cookieName="members"
                names="1.2.3.4.5+"
                classes="border-pink-300 border-purple-400 border-indigo-700 border-green-500 border-yellow-200"
            >
                <h1 class="text-2xl text-blue-200">Family member count?</h1>
            </MultipleChoice>
        );
    }
}

export async function getServerSideProps(ctx) {
    console.log();
    nookies.set(ctx, "lastSection", "/intro/members", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);
    return { props: cookies };
}
