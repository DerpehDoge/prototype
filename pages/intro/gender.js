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
                href="/intro/age"
                nextText="Let's head to age."
                cookieName="gender"
                names="Male.Female.Attack Helicopter.Prefer not to say.Other"
                classes="border-blue-200 border-red-200 border-gray-700 border-purple-400 border-yellow-200"
            >
                <h1 class="text-2xl text-blue-500 dark:text-blue-200">
                    Hey there. What's your gender?
                </h1>
            </MultipleChoice>
        );
    }
}
export async function getServerSideProps(ctx) {
    console.log();
    nookies.set(ctx, "lastSection", "/intro/gender", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);
    return { props: cookies };
}
