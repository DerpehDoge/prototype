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
                names={"2.0,2.25,2.5,2.75,3.0,I don't have a shower.".split(
                    ","
                )}
                classes="border-green-500 border-green-300 border-yellow-100 border-red-300 border-red-500 border-gray-200"
            >
                <h1 class="text-2xl text-blue-200"></h1>
                <h1 className="text-3xl text-yellow-600 dark:text-yellow-200 pointer-events-none select-none p-3">
                    What type of shower head do you have?
                </h1>
                <h3 className="text-center text-blue-200">
                    the standard is 2.5
                    <Tooltip title="gallons per minute">
                        <h1 className="text-yellow-100 inline">gpm,</h1>
                    </Tooltip>
                    . If yours is not listed here, please choose the nearest
                    option.
                </h3>
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
