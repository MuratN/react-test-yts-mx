export const getMovieList = async (page, limit) => {
    const response2 = await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${limit}`
    );

    return await response2.json();
};
