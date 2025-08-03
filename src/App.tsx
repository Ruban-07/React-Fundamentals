import "./App.css";
import type React from "react";
import FirstParentComponent from "./pages/example_1/FirstParentComponent";
import ThirdParentComponent from "./pages/example_3/ThirdParentComponent";
import SecondParentComponent from "./pages/example_2/SecondParentComponent";

const App: React.FC = () => {
  return (
    <>
      <FirstParentComponent />
      <SecondParentComponent />
      <ThirdParentComponent />
    </>
  );
};

export default App;
