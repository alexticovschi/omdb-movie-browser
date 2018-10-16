import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movieList, getMovieById }) => {
    const list_of_movies = movieList && movieList.map(movie => (
        <MovieItem 
            key={movie.imdbID}
            getMovieById={getMovieById}
            title={movie.Title}
            poster={movie.Poster}
            id={movie.imdbID}
        />
    ));
    return (
        <div className="container">
            <main className="main-content">
                {list_of_movies}
            </main>
        </div>
    );
}

export default MovieList;
