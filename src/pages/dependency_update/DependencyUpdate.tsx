import React, { useEffect, useState } from "react";

const DependencyUpdate: React.FC = () => {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        console.log("Name Updated by: ", name);
    }, [name]);

    return (
        <div>
            <h2>Type your Name:</h2>
            <input
                type="text"
                value={name}
                onChange={(inputValue) => setName(inputValue.target.value)}
            />
        </div>
    );
};

export default DependencyUpdate;
