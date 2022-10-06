import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie);
    const {id} = useParams();

    useEffect(() => {
        getMovie();
    }, [])

    const getMovie = () => {
        axios
            .get("https://api.themoviedb.org/3/movie/" + id + "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU")
            .then(response => {
                console.log(response);
                dispatch({ type: 'GET_MOVIE_BY_ID', payload: response.data });
            });
    }

    return (
        <div>
            <h1>MovieInfo</h1>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" width="300px" />
            <p>{movie.original_title}</p>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.tagline}</p>
            <p>{movie.popularity}</p>
        </div>
    )
}

export default MovieInfo;