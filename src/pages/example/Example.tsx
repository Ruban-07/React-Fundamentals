import React, { useEffect } from "react";

const Example: React.FC = () => {
    useEffect(() => {
        console.log("Component has Mounted Successfully!");
        return console.log("Component has Unmounted.");
    }, []);
    return <h1>Hello UseEffect!</h1>;
};

export default Example;