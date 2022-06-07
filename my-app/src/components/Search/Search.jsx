import React from "react";
import Header from "../Header/Header";
import "./Search.css";
import { useState } from "react";
import { searchMovie } from "../../App";
import { useEffect } from "react";
import { ReactDOM } from "react";
import Modal from "../Modal/Modal";
import searchIcon from "../../images/iconSearch.png";
export default function Search() {
  const [keyword, setKeyWord] = useState("");
  const [foundFilms, setFoundFilms] = useState([]);
  const [isFound, setIsFound] = useState(false);
  const [isModal, setModal] = React.useState(false);
  function get_title(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    searchMovie(keyword).then((movies) => {
      setFoundFilms(movies);
      setModal(true);
    });
  }
  console.log(isModal);
  return (
    <div className="search_section">
      <div className="search_content">
        <h2>Welcome</h2>
        <h3>
          Millions of movies, TV shows to discover. Explore now and enjoy!
        </h3>
        <form className="search_form" action="" method="get">
          <input
            className="input_name"
            value={keyword}
            onChange={get_title}
            name="s"
            placeholder="Enter name..."
          />
          <img
            onClick={handleSubmit}
            className="search_button"
            src={searchIcon}
          ></img>
        </form>
      </div>
      {isModal && <Modal setModal={setModal} foundFilms={foundFilms} />}
    </div>
  );
}
