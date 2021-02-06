import { Component } from "react";

export default class Choice extends Component {
    constructor(props) {
        super(props);
        if (!this.props.choose)
            throw new Error("Expected a 'choose' property, got none.");
        if (typeof this.props.choose !== "function")
            throw new Error("The 'choose' property must be a function.");
    }
    render() {
        return <div></div>;
    }
}
