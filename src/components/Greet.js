import React from "react";

const Greet = (props) => {
    const { name, hero } = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {hero}</h1>
            {props.children}
        </div>
        )
}

export default Greet ;