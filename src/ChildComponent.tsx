import { Lightbulb, LightbulbOff } from "lucide-react";

interface ChildComponentProps {
  title: string;
  description: string;
  darkMode: boolean;
}

const ChildComponent = (props: ChildComponentProps) => {
  return (
    <div className={props.darkMode ? "bg-dark p-5" : "bg-light"}>
      <h1>
        <strong>{props.title}</strong>
      </h1>
      <p>{props.description}</p>
      {props.darkMode ? <Lightbulb /> : <LightbulbOff />}
    </div>
  );
};

export default ChildComponent;
