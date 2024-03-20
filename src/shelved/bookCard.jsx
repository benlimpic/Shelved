
import "./style.shelved.css";
import PropTypes from "prop-types";

export default function BookCard(props) {
  const { title, author, image, description } = props.book;

  return (
    <>
    <div>
      <div className="bookCard">
        <h4>  {title} </h4>
        <img src={image} alt={title + " / " + author} />
        <p >{author}</p>
        <h5>Summary</h5>
        <p>{description}</p>
      </div>
    </div>
    </>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};