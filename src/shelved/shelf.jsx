import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import ShelfItem from "./shelfItem";
import "./style.shelved.css";

export default function Shelf(props) {
  const { name, books } = props.testShelf;

  const hideButtons = ()  => {
    const buttons = document.querySelectorAll('.css-1m9128y');
    buttons.forEach(button => button.style.display = 'none');

    const navLeft = document.querySelectorAll('.css-hn784z');
    navLeft.forEach(button => button.style.display = 'none');

    const navRight = document.querySelectorAll('.css-1abc02a');
    navRight.forEach(button => button.style.display = 'none');
  }

  React.useEffect(() => {
    hideButtons();
  }, []);

  return (
    <div className="shelf">
      <h4>{name}</h4>
      <Carousel className="" swipe="true" animation="fade">
        {books.map((item, i) => (
          <ShelfItem key={i} item={item} />
          
        ))}
      </Carousel>
    </div>
  );

  
}

Shelf.propTypes = {
  testShelf: PropTypes.shape({
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }).isRequired,
};

