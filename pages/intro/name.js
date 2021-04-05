import TextInput from "../../components/TextInput";
import nookies from "nookies";

export default class Name extends React.Component {
    render() {
        return (
            <TextInput
                placeholder={this.props.name ? this.props.name : ""}
                cookie="name"
                target="/intro/gender"
            >
                <h1 className="text-5xl">Welcome.</h1>
                <h2 className="text-2xl mt-3">What's your name?</h2>
            </TextInput>
        );
    }
}

export async function getServerSideProps(ctx) {
    nookies.set(ctx, "lastSection", "/intro/name", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
    });
    let cookies = nookies.get(ctx);
    console.log(cookies);
    return { props: cookies };
}
