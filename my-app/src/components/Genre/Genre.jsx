import React, { useState } from "react";
import './Genre.css'
let genres = []
export default function Genre(props) {
    const [isClicked, setIsClicked] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        if (isClicked) {
            e.target.style.backgroundColor = "#0e121d";
            setIsClicked(false)
            delete genres[genres.indexOf(e.target.id)]
        }
        else {
            e.target.style.backgroundColor = "#01b4e4"
            setIsClicked(true)
            genres.push(e.target.id)
        }
        console.log(genres)
        props.setSelectedGenre(genres)
    }
    return (
        <button key={props.genreId} className = "genre" onClick={handleSubmit} id= {props.genreId}>{props.genreName}</button>
    )
}
