import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [state, setState] = useState(null);
  const [count, setCount] = useState(0);
  const [countText, setCountText] = useState("zero");

  useEffect(() => {
    console.log("Project has been rendered");
    setTimeout(() => {
      setState("Hello world. This is async func");
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("count has been changed");
    switch (count) {
      case 0:
        setCountText("zero");
        break;
      case 1:
        setCountText("one");
        break;
      case 2:
        setCountText("two");
        break;
      case 3:
        setCountText("three");
        break;
      case 4:
        setCountText("four");
        break;
      case 5:
        setCountText("five");
        break;
      default:
        setCountText("Out of range");
        break;
    }
  }, [count, setCount]);

  return (
    <div className="App">
      Salom
      <h2>{state}</h2>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <h3>{countText}</h3>
      <UsersList />
    </div>
  );
}

export default App;
