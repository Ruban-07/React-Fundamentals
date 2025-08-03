import "./App.css";
import type React from "react";
import FirstParentComponent from "./pages/example_1/FirstParentComponent";
import ThirdParentComponent from "./pages/example_3/ThirdParentComponent";
import SecondParentComponent from "./pages/example_2/SecondParentComponent";
import CounterApp from "./pages/counter_app/CounterApp";

const App: React.FC = () => {
  return (
    <>
      <CounterApp />
      <br />
      <hr />
      <br />
      <FirstParentComponent />
      <br />
      <hr />
      <br />
      <SecondParentComponent />
      <br />
      <hr />
      <br />
      <ThirdParentComponent />
      <br />
      <hr />
      <br />
    </>
  );
};

export default App;
