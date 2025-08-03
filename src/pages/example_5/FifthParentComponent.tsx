import { useState } from "react";
import FifthChildComponent from "./FifthChildComponent";

const FifthParentComponent = () => {
  const [inputMessage, setInputMessage] = useState<string>("");
  const handleReceivedInput: (value: string) => void = (data: string) => {
    setInputMessage(data);
  };
  return (
    <div>
      <h1>Input Message: {inputMessage}</h1>
      <FifthChildComponent onSend={handleReceivedInput} />
    </div>
  );
};

export default FifthParentComponent;
