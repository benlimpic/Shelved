import "./style.shelved.css";

export default function Books(result) {
  return (
    <div>
      {result.map((book, index) => {
        let thumbnail =
          book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
        let title = book.volumeInfo.title;
        let author = book.volumeInfo.authors;
        let description = book.volumeInfo.description;
        let publisher = book.volumeInfo.publisher;
        let pageCount = book.volumeInfo.pageCount;
        let previewLink = book.volumeInfo.previewLink;

        return (
          <div className="card" key={index}>
            <h3>{title}</h3>

            <a key={index} target="_blank" href={previewLink}>
              <img src={thumbnail} />
            </a>

            <div className="book-cell">
              <label>Author:</label>
              <p>{author}</p>
            </div>

            <div className="book-cell">
              <label>Publisher:</label>
              <p>{publisher}</p>
              <label>Page Count:</label>
              <p>{pageCount}</p>
            </div>

            <div className="book-cell">
              <label>Book Description:</label>
              <p>{description}</p>
            </div>

            <button>Add to Shelf</button>
          </div>
        );
      })}
    </div>
  );
}
