import type React from "react";
import ThirdChildComponent from "./ThirdChildComponent";

const ThirdParentComponent: React.FC = () => {
  const handleReceive: (value: string) => void = (data: string) => {
    console.log("Message from your child: ", data);
  };
  return (
    <div>
      <h1>hello All</h1>
      <ThirdChildComponent onSend={handleReceive} />
    </div>
  );
};

export default ThirdParentComponent;
