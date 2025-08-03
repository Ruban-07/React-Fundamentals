import type React from "react";
import SecondChildComponent from "./SecondChildComponent";

const user = {
    name: "Ruban",
    id: 1,
    email: "ruban@gmail.com",
}
const SecondParentComponent: React.FC = () => {
    return <div>
        <h1>Second Parent Component</h1>
        <SecondChildComponent user={user} />
    </div>
}

export default SecondParentComponent;