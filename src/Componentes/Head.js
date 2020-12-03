import React from "react";

const Head = (props) => {
    React.useEffect(() => {
        document.title = `Metrologia SENAI | ${props.title}`;

        document.querySelector("meta[name='description'")
        .setAttribute(
            "content",
            `Metrologia SENAI | ${props.title}, ${props.description}` || ""
        );
    }, [props]);
    
    return <></>;
};

export default Head;