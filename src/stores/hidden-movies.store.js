let hiddenMovies;

export const getHiddenMovies = () => {
    if (hiddenMovies) {
        return hiddenMovies;
    }

    const moviesString = localStorage.getItem("ytx-hidden-movies") || "[]";

    const movies = JSON.parse(moviesString);

    hiddenMovies = movies;

    return movies;
};

export const addHiddenMovie = (movie) => {
    const movies = getHiddenMovies();

    movies.push(movie);

    localStorage.setItem("ytx-hidden-movies", JSON.stringify(movies));
};

export const removeHiddenMovie = (id) => {
    const movies = getHiddenMovies();

    const index = movies.findIndex((movie) => movie.id === id);

    if (index !== -1) {
        movies.splice(index, 1);

        localStorage.setItem("ytx-hidden-movies", JSON.stringify(movies));
    }
};

export const isMovieHidden = (id) => {
    const movies = getHiddenMovies();

    return !!movies.find((movie) => movie.id === id);
};
