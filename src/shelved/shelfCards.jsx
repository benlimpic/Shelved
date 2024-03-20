import PropTypes from "prop-types";
import "./style.shelved.css";
import BookPage from "./modal/bookpage";
import { useState } from "react";

export default function ShelfCards(props) {
  const { shelf } = props;
  const [bookPageOpen, setBookPageOpen] = useState(false);
  const [bookIndex, setBookIndex] = useState(0);
  const handleOpen = () => setBookPageOpen(true);
  const handleClose = () => setBookPageOpen(false);

  const handleGet = (e) => {
    if (e.target.id) {
      console.log(
        "found book",
        e.target.id,
        "On Shelf",
        e.target.parentElement.id
        );
        setBookIndex(e.target.id - 1);
    } else {
      console.log(
        "found book",
        e.target.parentElement.id,
        "On Shelf",
        e.target.parentElement.parentElement.id
        );
        setBookIndex(e.target.parentElement.id - 1);
    }
    handleOpen();
  }

  return (
    <>
      <BookPage open={bookPageOpen} close={handleClose} shelf={shelf} bookIndex={bookIndex}/>
      <div className="shelves">
        <div className="shelfRow" id={shelf.id}>
          {shelf.books.map((item, i) => (
            <div className="modal-shelfItem"  key={i} id={item.bookID} onClick={handleGet}>
                <h4>  {item.title} </h4>
                <img src={item.image} alt={item.title + " / " + item.author} />
                <h5 >{item.author}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

ShelfCards.propTypes = {
  shelf: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }).isRequired,
};
