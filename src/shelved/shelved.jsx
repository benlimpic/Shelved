import Search from "./search";

import "./style.shelved.css";


export default function App() {

  const testShelf = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      img: "https://m.media-amazon.com/images/I/819wCzUTZWL._SY342_.jpg"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      img: "https://m.media-amazon.com/images/I/81Lg5ZKv9WL._SY346_.jpg"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      img: "https://m.media-amazon.com/images/I/81z0j6Z6ZgL._SY346_.jpg"
    }
  ]

  const displayShelf = testShelf.map((book, index) => {
    return (
      <div className="card" key={index}>
        <h3>{book.title}</h3>
        <img src={book.img} />
        <p>{book.author}</p>
      </div>
    )
  })

  return (
    <div className="container">
      <h1>SHELVED</h1>
      <Search />
      <div className="shelf">
        {displayShelf}
      </div>
    </div>
  );
}