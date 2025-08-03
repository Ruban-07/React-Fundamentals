import type React from "react";
import { useState } from "react";

const CounterApp: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increaseCount: () => void = () => {
        setCount((previousValue) => previousValue + 1);
        console.log("Count Increased!");
    };

    const decreaseCount: () => void = () => {
        setCount((previousValue) => previousValue - 1);
        console.log("Count Decreased!");
    };

    return (
        <div>
            <h1>Counter App</h1>
            <h2>
                <strong>{count}</strong>
            </h2>
            <button onClick={increaseCount}>Increment</button>
            &nbsp;
            <button onClick={decreaseCount}>Decrement</button>
        </div>
    );
};

export default CounterApp;
