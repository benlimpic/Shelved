import PropTypes from 'prop-types';
import './style.shelved.css';


export default function ShelfItem(props) {

  const { title, image, author } = props.item;

    return (
      <div className="shelfItem">
        <img src={image} alt={title + " / " + author} />
      </div>
    );
  }

ShelfItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
