import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import ShelfItem from "./shelfItem";
import ShelfPage from "./modal/shelfPage";
import "./style.shelved.css";

export default function Shelf(props) {
  const { name, books,  id} = props.testShelf;
  const [shelf] = useState(props.testShelf);
  const [shelfPageOpen, setShelfPageOpen] = useState(false);
  const handleOpen = () => setShelfPageOpen(true);
  const handleClose = () => setShelfPageOpen(false);


  const hideButtons = ()  => {
    const buttons = document.querySelectorAll('.css-1m9128y');
    buttons.forEach(button => button.style.display = 'none');

    const navLeft = document.querySelectorAll('.css-hn784z');
    navLeft.forEach(button => button.style.display = 'none');

    const navRight = document.querySelectorAll('.css-1abc02a');
    navRight.forEach(button => button.style.display = 'none');
  }

  
  useEffect(() => {
    hideButtons();
  }, []);

  return (
    <>
      <ShelfPage shelf={shelf} open={shelfPageOpen} handleClose={handleClose}/>
      <div className="shelf" id={id} onClick={handleOpen}>
        <div>
          <h4>{name}</h4>
          <Carousel className="" swipe="true" animation="fade">
            {books.map((item, i) => (
              <ShelfItem key={i} item={item} />          
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );

  
}

Shelf.propTypes = {
  testShelf: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }).isRequired,
};

