import React, { useState } from "react";

type Props = {
  onSend: (value: string) => void;
};

const FifthChildComponent: React.FC<Props> = ({ onSend }) => {
  const [input, setInput] = useState<string>("");
  const sendData: () => void = () => {
    onSend(input);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(value) => setInput(value.target.value)}
        placeholder="Type something here"
      />
      &nbsp;
      <button onClick={sendData}>Send Input Data</button>
    </div>
  );
};

export default FifthChildComponent;
