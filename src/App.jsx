import "./App.css";
import ButtonUsage from "./button";
import Button from "@mui/material/Button";
import * as React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const countZero = (event) => {
    event.preventDefault();
    setCount(0);
  }

  return (
    <>
      <header className="App-header">
        <h1>Hello World</h1>
        <h2>Count: {count}</h2>

        <Button onClick={countZero} variant="outlined" size="small" color="primary">
          Reset
        </Button>
        <ButtonUsage count={count} setCount={setCount} />
      </header>
    </>
  );
}

export default App;
