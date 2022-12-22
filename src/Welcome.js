import React from "react";

/* export default class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name || "Gianmai"}!</h1>
    }
} A intuito mi è venuta sta soluzione XD*/

export default class Welcome extends React.Component {
    static defaultProps = {
        name: "Gianmai",
    }
    render() {
        return <h1>Hello, {this.props.name}!</h1>
    }
}