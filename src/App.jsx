import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let inCreament = () => {
    setCount(count + 1);
  };
  let deCreament = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <p>{count}</p>
        <div>
          <button className="button" onClick={inCreament}>
            Increase
          </button>
          <button className="button" onClick={deCreament}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
