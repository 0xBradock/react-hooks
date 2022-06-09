import { useState, useEffect } from "react";

function Greeting({ defaultName = "" }) {
  const [name, setName] = useState(() => {
    const valueInLS = window.localStorage.getItem("name");
    if (valueInLS) {
      return JSON.parse(valueInLS);
    } else {
      return defaultName;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
