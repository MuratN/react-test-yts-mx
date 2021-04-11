import { useEffect, useRef, useState } from "react";
import { getMovieList } from "../../api/yts-mx.api";
import {
    addHiddenMovie,
    isMovieHidden,
} from "../../stores/hidden-movies.store";
import { MovieTable } from "../../components/movie-table/movie-table";
import { Pagination } from "../../components/pagination/pagination";
import { Spin } from "../../components/spin/spin";
import { MainLayout } from '../../components/main-layout/main-layout';

const LIMIT = 10;

export const Index = () => {
    const movieList = useRef([]);
    const [showMovieList, setShowMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const lastPage = useRef(0);

    const updateMovies = () => {
        const realMovies = movieList.current.filter(
            (movie) => !isMovieHidden(movie.id)
        );
        setShowMovieList(realMovies);
    };

    const handleClickBack = () => {
        const newPage = Math.max(page - 1, 1);
        setPage(newPage);
    };

    const handleClickForward = () => {
        const newPage = Math.min(page + 1, lastPage.current);
        setPage(newPage);
    };

    const handleClickHideMovie = (movie) => {
        addHiddenMovie(movie);
        updateMovies();
    };

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            const list = await getMovieList(page, LIMIT);
            movieList.current = list.data.movies;
            lastPage.current = Math.floor(list.data.movie_count / LIMIT) + 1;

            updateMovies();
            setLoading(false);
        };
        getMovies();
    }, [page]);

    return (
        <MainLayout>
            <h1>Movie portal</h1>
            <h2>Movies</h2>
            <Pagination
                page={page}
                onClickBack={handleClickBack}
                onClickForward={handleClickForward}
            />
            <Spin active={loading}>
                <MovieTable
                    list={showMovieList}
                    onHide={handleClickHideMovie}
                />
            </Spin>
            <Pagination
                page={page}
                onClickBack={handleClickBack}
                onClickForward={handleClickForward}
            />
        </MainLayout>
    );
};
