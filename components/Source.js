import { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";

export default class Source extends Component {
    render() {
        return (
            <>
                <Tooltip
                    interactive
                    arrow
                    title={
                        <a
                            href={this.props.href}
                            target="_blank"
                            className="font-mono text-center"
                        >
                            {this.props.citation}‌
                        </a>
                    }
                >
                    <h1 className="text-yellow-500 dark:text-yellow-100 inline">
                        {this.props.children}
                    </h1>
                </Tooltip>{" "}
            </>
        );
    }
}
