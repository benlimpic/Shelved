import "../style.shelved.css";
import Box from "@mui/material/Box";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Carousel from "react-material-ui-carousel";
import BookCard from "../bookCard";

export default function BookPage(props) {
  const { open, close, shelf, bookIndex } = props;

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        indicators="false"
      >
        <Box className="modal-style">
          <nav className="modal-nav">
            <button className="modal-edit">
              <ModeEditTwoToneIcon />
            </button>
            <h2>{shelf.name}</h2>
            <button className="modal-exit" onClick={close}>
              <ClearTwoToneIcon />
            </button>
          </nav>
          <Carousel
            className=""
            swipe="true"
            navButtonsAlwaysVisible="true"
            autoPlay="false"
            animation="false"
            interval="2000000000"
            cycleNavigation="false"
            indicators="false"
            index={bookIndex}
          >
            {shelf.books.map((book, i) => (
              <BookCard key={i} book={book} />
            ))}
          </Carousel>
        </Box>
      </Modal>
    </div>
  );
}

BookPage.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  shelf: PropTypes.object.isRequired,
  bookIndex: PropTypes.number.isRequired,
};
