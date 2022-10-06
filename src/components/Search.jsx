import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
    const inputValue = useRef();
    const dispatch = useDispatch();
    const searchedMovie = useSelector(state => state.searchedMovie);

    const search = () => {
        axios
            .get("https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" + inputValue.current.value + "&page=1")
            .then(response => {
                console.log(response);
                dispatch({ type: "SEARCH", payload: response.data.results });
            });
    }

    return (
        <div>
            <input type="text" ref={inputValue} />
            <button onClick={search}>search it ^_^</button>
            {searchedMovie &&
                searchedMovie.map(m =>
                    <div key={m.id}>
                        <Link to={`/movies/${m.id}`}>
                            <div>
                                <p>{m.title}</p>
                                <img src={"https://image.tmdb.org/t/p/w500" + m.poster_path} alt="" width="300px" />
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Search;