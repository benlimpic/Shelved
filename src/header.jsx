import React from "react";
import ButtonUsage from "./button";
import Button from "@mui/material/Button";
import "./App.css";

export default function Header() {
  const [count, setCount] = React.useState(0);
  const [headerColor, setHeaderColor] = React.useState("#E3E3E3");
  const [headerText, setHeaderText] = React.useState("Hello World");

  const countZero = (event) => {
    event.preventDefault();
    setCount(0);
  };

  React.useEffect(() => {
    if (count === 0) {
      // setLogoSpeed(0);
      setHeaderColor("#E3E3E3");
      setHeaderText("Hello World");
    } else if (count % 2 === 0) {
      // setLogoSpeed(5);
      setHeaderColor("#D3302F");
      setHeaderText("BooHoo!");
    } else if (count % 2 !== 0) {
      // setLogoSpeed(5);
      setHeaderColor("#1776D2");
      setHeaderText("WooHoo!");
    }
  }, [count]);

  const wobble = (content) => {
    let text = content.split("");
    const textCode = text.map((x, idx) => {
      let delay = (idx + 1) * 50;
      return (
        <span
          key={idx}
          className="wobble"
          style={{ animationDelay: `${delay}ms` }}
        >
          <h1>{x}</h1>
        </span>
      );
    });
    return textCode;
  };

  return (
    <>
      <header className="App-header">
        <div className="wobble" style={{ color: `${headerColor}` }}>
          <>
            {count === 0 ? (
              <div className="logo">
                <h1>{headerText}</h1>
              </div>
            ) : (
              <div className="logo">{wobble(headerText)}</div>
            )}
          </>
        </div>

        <ButtonUsage count={count} setCount={setCount} />
        <p>{count}</p>
        <Button
          onClick={countZero}
          variant="outlined"
          size="small"
          color="primary"
        >
          Reset
        </Button>
      </header>
    </>
  );
}
