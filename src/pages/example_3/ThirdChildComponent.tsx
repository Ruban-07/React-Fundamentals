import type React from "react"

type Props = {
  onSend: (value: string) => void,
}

const ThirdChildComponent: React.FC<Props> = ({ onSend }) => {
  const handleClick: () => void = () => {
    const message: string = "I'm your child!";
    onSend(message);
  }
  return <div>
    <h1>Third Child Component</h1>
    <p>Data passing from child to parent</p>
    <button onClick={handleClick}>Pass the Data</button>
  </div>;
}

export default ThirdChildComponent;