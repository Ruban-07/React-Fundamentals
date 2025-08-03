import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <ChildComponent
      title="Props"
      description="Passed from Parent to child"
      darkMode={true}
    />
  );
};

export default ParentComponent;
