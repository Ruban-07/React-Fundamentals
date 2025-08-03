import React, { useState } from "react";
import FourthChildComponent from "./FourthChildComponent";

const FourthParentComponent: React.FC = () => {
    // setMessage not used, so that I removed it here
    const [message] = useState<string>("Hello my dear friend!");
    return <div>
        <h1>Message:</h1>
        <FourthChildComponent message={message} />
    </div>;
};

export default FourthParentComponent;
