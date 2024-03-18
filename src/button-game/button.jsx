/* eslint-disable react/no-unescaped-entities */
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';

export default function ButtonUsage({ count, setCount }) {

  const handleClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const clicker = () => {
    if (count === 0) {
      return (
        <>
          <h2 style={{ color: "#E3E3E3" }}>Nice To Meet You!</h2>
          <Button onClick={handleClick} variant="contained" color="primary">
            Let's Be Friends!
          </Button>
        </>
      );
    } else if (count !== 0 && count % 2 === 0) {
      return (
        <>
          <h2 style={{ color: "#D3302F" }}>We Aren't Friends Anymore!</h2>
          <Button onClick={handleClick} variant="contained" color="primary">
            Let's Be Friends Again!
          </Button>
        </>
      );
    } else if (count !== 0 && count % 2 !== 0) {
      return (
        <>
          <h2 style={{ color: "#1776D2" }}>We're The Best of Friends!</h2>
          <Button onClick={handleClick} variant="contained" color="error">
            Stop Being Friends!
          </Button>
        </>
      );
    }
  };

  return (
    <>
      {clicker()}
    </>
  )
}

ButtonUsage.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

