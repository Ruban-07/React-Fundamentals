import "./App.css";
import type React from "react";
import FirstParentComponent from "./pages/example_1/FirstParentComponent";
import ThirdParentComponent from "./pages/example_3/ThirdParentComponent";
import SecondParentComponent from "./pages/example_2/SecondParentComponent";
import CounterApp from "./pages/counter_app/CounterApp";
import FourthParentComponent from "./pages/example_4/FourthParentComponent";
import FifthParentComponent from "./pages/example_5/FifthParentComponent";

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
      <SecondParentComponent />
      <br />
      <hr />
      <ThirdParentComponent />
      <br />
      <hr />
      <FourthParentComponent />
      <br />
      <hr />
      <FifthParentComponent />
    </>
  );
};

export default App;
