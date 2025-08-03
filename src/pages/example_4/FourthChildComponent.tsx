import React from "react";

type Props = {
    message: string,
}

const FourthChildComponent: React.FC<Props> = ({ message }) => {
    return <div>
        <h1>{message}</h1>
    </div>;
};

export default FourthChildComponent;
