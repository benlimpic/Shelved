import "./style.shelved.css";
import process from 'process';
import axios from "axios";
import Books from "./books";
import Movies from "./movies";
import { useState, useEffect } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selection, setSelection] = useState("Books");
  const [result, setResult] = useState([]);
  const [apiKey, setAPIKey] = useState(process.env.Book_API);

  const getBooks = async () => {
    try {
      await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            searchTerm +
            "&key=" +
            apiKey +
            "&maxResults=40"
        )
        .then((response) => setResult(response.data.items));
    } catch (error) {
      console.log("error", error);
    }
  };

  const getMovies = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.Movie_API_Read_Access_Token}`,
        },
      };

      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=` +
            searchTerm +
            `&api_key=` +
            apiKey,
          options
        )
        .then((response) => setResult(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (selection === "Books") {
      setAPIKey(process.env.Book_API);
    } else if (selection === "Movies") {
      setAPIKey(process.env.Movie_API);
    }
  }, [selection]);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelection(e.target.value);
    setResult([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    if (selection === "Books") {
      getBooks();
    } else if (selection === "Movies") {
      getMovies();
    }
  };

  const handleDisplay = () => {
    if (selection === "Books") {
      return Books(result);
    } else if (selection === "Movies") {
      return Movies(result);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <form className="form-inline row center" onSubmit={handleSubmit}>
          <div className="form-group col-lg-2 form-cell">
            <select
              className="form-control"
              defaultValue="Choose..."
              onChange={handleSelect}
            >
              <option value="Books">Books</option>
              <option value="Movies">Movies</option>
              <option value="Music">Music</option>
            </select>
          </div>
          <div className="form-group col-lg-9 form-cell">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              aria-label="Text input with dropdown button"
              placeholder="Search Media"
            ></input>
          </div>
          <div className="form-group col-lg-1 form-cell">
            <button type="submit" className="btn btn-outline-dark">
              Search
            </button>
          </div>
        </form>
      </div>
      {handleDisplay()}
    </div>
  );
}
