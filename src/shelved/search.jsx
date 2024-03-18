/* eslint-disable no-undef */
import "./style.shelved.css";
import axios from "axios";
import Books from "./books";
import { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selection, setSelection] = useState("Books");
  const [result, setResult] = useState([]);
  // eslint-disable-next-line no-undef
  const [apiKey, setAPIKey] = useState("AIzaSyAO9pcxROVkf5vJ9l_wBkTfdsw1DynlS0E");

  const getBooks = async () => {
    try {
      await axios
        .get(
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

  // useEffect(() => {
  //   if (selection === "Books") {
  //     setAPIKey(process.env.Book_API);
  //   }
  // }, [selection]);

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
    getBooks();
  };

  const handleDisplay = () => {
    if (selection === "Books") {
      return Books(result);
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
