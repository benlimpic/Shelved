import axios from 'axios';
import React from 'react';


export default function Shelf() {
  const [shelfName, setShelfName] = React.useState("");


  const handleNameChange = (e) => {
    setShelfName(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    createShelf()
    document.querySelector(".form-1").reset();
  }

  const createShelf = () => {
    axios.post('http://localhost:3001/shelf', {
      shelfName: shelfName
    })
    .then((response) => {
      console.log(response);
    }
    )
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <div>
      <h1>Shelf</h1>
      <form className="form-1 form-box" onSubmit={formSubmit}>
        <input className="form-cell" type="text" onChange={handleNameChange} placeholder='Shelf Name'/>
        <br />
        <button type="submit" >Create Shelf</button>
      </form>
    </div>
  );
}

