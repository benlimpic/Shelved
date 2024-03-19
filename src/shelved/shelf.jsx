import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import ShelfItem from "./shelfItem";
import ShelfPage from "./shelf-page/shelfPage";
import "./style.shelved.css";

export default function Shelf(props) {
  const { name, books,  id} = props.testShelf;
  const [shelf, setShelf] = useState(props.testShelf);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleShelf = (e) => {
    e.preventDefault();
    console.log("Shelf Clicked", shelf);
    {open ? handleClose() : handleOpen()}  
  }













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
    <div className="shelf" onClick={handleShelf} id={id}>
      <h4>{name}</h4>
      <ShelfPage shelf={shelf} open={open} setOpen={setOpen}/>
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }).isRequired,
};

