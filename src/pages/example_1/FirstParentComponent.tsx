import FirstChildComponent from "./FirstChildComponent";

const FirstParentComponent = () => {
  return (
    <FirstChildComponent
      title="Props"
      description="Passed from Parent to child"
      darkMode={true}
    />
  );
};

export default FirstParentComponent;
