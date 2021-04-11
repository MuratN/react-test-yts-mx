import { useEffect, useState } from "react";
import {
    removeHiddenMovie,
    getHiddenMovies,
} from "../../stores/hidden-movies.store";
import { MovieTable } from "../../components/movie-table/movie-table";
import { MainLayout } from '../../components/main-layout/main-layout';

export const HiddenMovies = () => {
    const [hiddenMovieList, setHiddenMovieList] = useState([]);

    const updateMovies = () => {
        setHiddenMovieList([...getHiddenMovies()]);
    };

    const handleClickShowMovie = (movie) => {
        removeHiddenMovie(movie.id);
        updateMovies();
    };

    useEffect(() => {
        updateMovies();
    }, []);

    return (
        <MainLayout>
            <h1>Movie portal</h1>
            {hiddenMovieList.length > 0 && (
                <>
                    <h2>Hidden movies</h2>
                    <MovieTable
                        list={hiddenMovieList}
                        onShow={handleClickShowMovie}
                    />
                </>
            )}
        </MainLayout>
    );
};
