import React, { Component } from "react";

class Hello extends Component {
    render() {
        const {children} = this.props
        return (
            <div>
                <h1>Class components</h1>
                {children}
            </div>
        )
    }
}

export default Hello