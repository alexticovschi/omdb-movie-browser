import React from 'react';


const MovieItem = ({title, poster, id, getMovieById}) => {
    return (
        <article className="card">
            <h4 className="card-title">{title}</h4>
            <img src={poster === "N/A" ? "https://dummyimage.com/243x350/7b8a91/ffffff&text=Poster+Not+Available" : poster} alt="img card" />
            <div className="content">
                <button className="btn">Movie Details</button>
            </div>
        </article>
    );
};

export default MovieItem;