import "./style.shelved.css";

export default function Movies(result) {
  return (
    <div>
      {result.map((media, index) => {
        console.log(media);
        let thumbnail = media.poster_path;
        let title = media.title;
        let releaseDate = media.release_date;
        let description = media.overview;

        return (
          <div className="card" key={index}>
            <h3>{title}</h3>

            <img
              style={{ width: "150px" }}
              src={`https://image.tmdb.org/t/p/w500/${thumbnail}`}
              alt={title}
            />

            <div className="book-cell">
              <label>Release Date:</label>
              <p>{releaseDate}</p>
            </div>

            <div className="book-cell">
              <label>Movie Overview:</label>
              <p>{description}</p>
            </div>

            <button>Add to Shelf</button>
          </div>
        );
      })}
    </div>
  );
}
