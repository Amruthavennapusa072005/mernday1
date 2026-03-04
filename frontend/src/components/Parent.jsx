import React from "react";
import Child from "./Child"; 

const Parent = () => {
  const getData = (data) => {
    console.log("Received from child:", data);
    alert("Received from child: " + data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <Child send={getData} />
    </div>
  );
};

export default Parent;