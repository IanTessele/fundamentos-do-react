import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, props);
            })}
        </div>
    );
}