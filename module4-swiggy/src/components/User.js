import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => console.log("interval"), 1000);

    // component will mount
    return () => {
      clearInterval(timer);
      console.log("use effect called");
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>COntact: @akshaymarch7</h4>
      <h5>Count : {count}</h5>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default User;
//class based component UserClass.js
