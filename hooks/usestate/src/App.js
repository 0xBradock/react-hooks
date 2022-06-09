import { useState } from "react";

import "./App.css";

const App = () => {
  const expensiveFunctionCall = () => {
    console.log("EXPENSIVE");
    return -10;
  };

  // Lazy loading with function call
  const [count, setCount] = useState(expensiveFunctionCall);

  const handleClick = () => {
    setCount(count + 1);
    // setCount((val) => val + 1);
  };

  return (
    <div className="App">
      {count}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
