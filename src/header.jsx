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

  const fade = () => {
    document.querySelector(".fader").classList.add("fade");
    setTimeout(() => {
      document.querySelector(".fader").classList.remove("fade");
    }, 250);
  }

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

  React.useEffect(() => {
    if (count === 0) {
      setHeaderColor("#E3E3E3");
      setHeaderText("Hello World");
    } else if (count % 2 === 0) {

      setHeaderColor("#D3302F");
      setHeaderText("BooHoo!");
    } else if (count % 2 !== 0) {

      setHeaderColor("#1776D2");
      setHeaderText("WooHoo!");
    }
    fade();
  }, [count, setCount]);



  return (
    <>
      <header className="App-header">
        <div className="wobble" style={{ color: `${headerColor}` }}>
          <>
            {count === 0 ? (
              <div className="logo fader">
                <h1>{headerText}</h1>
              </div>
            ) : (
              <div className="logo fader">{wobble(headerText)}</div>
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
