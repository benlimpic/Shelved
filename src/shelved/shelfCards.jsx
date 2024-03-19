import PropTypes from "prop-types";
import "./style.shelved.css";

export default function ShelfCards(props) {
  const { shelf } = props;

  return (
    <div className="shelves">
      <h1 style={{color: "white"}}>{shelf.name}</h1>
      <div className="shelfRow">
        {shelf.books.map((item, i) => (
          <div className="shelf" id={shelf.id} key={i}>
            <div className="shelfItem">
              <h4> {item.title} </h4>
              <img src={item.image} alt={item.title + " / " + item.author} />
              <p>{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ShelfCards.propTypes = {
  shelf: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  }).isRequired,
};
