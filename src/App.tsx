import "./App.css";
import type React from "react";
import Example from "./pages/example/Example";
import UserList from "./pages/user_list/UserList";
import CounterApp from "./pages/counter_app/CounterApp";
import FirstParentComponent from "./pages/example_1/FirstParentComponent";
import ThirdParentComponent from "./pages/example_3/ThirdParentComponent";
import FifthParentComponent from "./pages/example_5/FifthParentComponent";
import SecondParentComponent from "./pages/example_2/SecondParentComponent";
import FourthParentComponent from "./pages/example_4/FourthParentComponent";
import DependencyUpdate from "./pages/dependency_update/DependencyUpdate";

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
      <br />
      <hr />
      <Example />
      <br />
      <hr />
      <UserList />
      <br />
      <hr />
      <DependencyUpdate />
    </>
  );
};

export default App;
