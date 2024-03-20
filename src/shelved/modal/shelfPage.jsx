import "../style.shelved.css";
import Box from "@mui/material/Box";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import ShelfCards from "../shelfCards";

export default function BasicModal(props) {
  const { shelf, open, handleClose} = props;


  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-style">
        <nav className="modal-nav">
          <button className="modal-edit">
            <ModeEditTwoToneIcon />
          </button>
          <h2>{shelf.name}</h2>
          <button className="modal-exit" onClick={handleClose}>
            <ClearTwoToneIcon />
          </button>
        </nav>
            < ShelfCards shelf={shelf} />
        </Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  shelf: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
