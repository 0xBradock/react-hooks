import { useState, memo, useCallback } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Luke");

  // const params = useMemo(() => ({ name }), [name]);

  // const handleClicker = useCallback(() => {
  //   console.log(`Clicked ${name}`);
  // }, [name]);

  const handleChange = useCallback(() => {
    console.log(`Clicked ${name}`);
  }, [name]);

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {/* <MemoChild params={params} onClick={handleClicker} /> */}
      <MemoChild onChange={handleChange} />
    </div>
  );
}

const Child = ({ onChange }) => {
  onChange();
  console.log("Child rendered");
  return <div>Child</div>;
};

const MemoChild = memo(Child);
export default App;
