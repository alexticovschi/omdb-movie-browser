import React from 'react';
import { Link } from 'react-router-dom';


const MovieItem = ({title, poster, id}) => {
    return (
        <article className="card">
            <h4 className="card-title">{title}</h4>
            <img src={poster === "N/A" ? "https://dummyimage.com/243x350/7b8a91/ffffff&text=Poster+Not+Available" : poster} alt="img card" />
            <div className="content">
                <Link to={id} className="btn">Movie Details</Link>
            </div>
        </article>
    );
};

export default MovieItem;