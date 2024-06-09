import React, { useState } from "react";
import Dark from "./components/Dark";
import Light from "./components/Light";

function App() {
  const [count, setCount] = useState(true);

  return (
    <div>
      {count ? (
        <Light count={count} setCount={setCount} />
      ) : (
        <Dark count={count} setCount={setCount} />
      )}
    </div>
  );
}

export default App;
