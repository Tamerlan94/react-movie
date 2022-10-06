import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
            .then(response => {
                console.log(response.data);
                dispatch({ type: "GET_ALL_MOVIES", payload: response.data.results });
            });
    }

    return (
        <div>
            <h1>MovieList</h1>
            {
                movies.map(m =>
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

export default MovieList;