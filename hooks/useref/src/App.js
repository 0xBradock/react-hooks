import { useRef, useEffect } from "react";

import VanillaTilt from "vanilla-tilt";

import "./App.css";

function Tilt({ children }) {
  const tiltRef = useRef();

  useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode);

    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      {children}
    </div>
  );
}

function App() {
  return (
    <Tilt>
      <p className="totally-centered">vanilla-tilt.js</p>
    </Tilt>
  );
}

export default App;
