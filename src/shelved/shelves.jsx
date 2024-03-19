import axios from "axios";
import { useEffect, useState } from "react";
import Shelf from "./shelf";
import "./style.shelved.css";

export default function Shelves() {

  const [shelves, setShelves] = useState([]);


  useEffect(() => {
    axios.get("../seed.json").then((response) => {
      console.log(response.data.shelves);
      setShelves(response.data.shelves[0]);
    });
  }
  , []);

  return (
    <div className="shelves">
      {shelves.map((shelf, i) => (
        <Shelf key={i} testShelf={shelf} />
      ))}
    </div>
  );
}

