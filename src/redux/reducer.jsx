const defaultState = {
    movies: [],
    movie: "",
    searchedMovie: "",
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_ALL_MOVIES":
            return { ...state, movies: action.payload }
        case "GET_MOVIE_BY_ID":
            return { ...state, movie: action.payload }
        case "SEARCH":
            return { ...state, searchedMovie: action.payload }
        default:
            return state;
    }
}

export default reducer;