import React, { Component } from 'react';
import './MovieInfo.css';


class MovieInfo extends Component {
  state = {
    movie: []
  }

  componentDidMount() {
    const { movie_id } = this.props.match.params;
    this.getMovieById(movie_id);
  }

  getMovieById = async (ID) => {
    const APIKEY = '65480b96';
    const resp = await fetch(`http://www.omdbapi.com/?i=${ID}&apikey=${APIKEY}`);

    // Wait for the response and return as JSON
    const movie = await resp.json();

    this.setState({ movie });
    // console.log('[MOVIE]:',this.state.movie);
  }

  render() {
    const {movie} = this.state;
    const {movie_id} = this.props.match.params;
    return (
      <div className="box">
        <div className="flex-container">
          <div className="d1">
              <img className="img-info" src={movie.Poster === "N/A" ? "https://dummyimage.com/243x350/7b8a91/ffffff&text=Poster+Not+Available" : movie.Poster} alt={"img card"} />
          </div>
          <div className="d2">
              <h1 className="info-title"><strong>{movie.Title}</strong></h1> 
              <hr/>
              <p><strong>Genre</strong>  {movie.Genre}</p>
              <p><strong>Released</strong>  {movie.Released}</p>
              <p><strong>Rated</strong>  {movie.Rated}</p>
              <p><strong>IMDB Rating</strong>  {movie.imdbRating}</p>
              <p><strong>Actors</strong>  {movie.Actors}</p>
              <p><strong>Writer</strong>  {movie.Writer}</p>
              <p><strong>Awards</strong>  {movie.Awards}</p>
              {movie.BoxOffice ? <p><strong>BoxOffice</strong>  {movie.BoxOffice}</p> : null}
              {movie.Website === "N/A" || !movie.Website ? null : <p><strong>Website</strong>  <a href={movie.Website} target="_blank" rel="noopener noreferrer">{movie.Website}</a></p>}
          </div> 
          <div className="d3">
            <p className="plot"><strong>Plot</strong>  {movie.Plot}</p>
            <div className="btn-div">
              <a className="btn btn-info b1" href={`http://imdb.com/title/${movie_id}`} target="_blank" rel="noopener noreferrer">View on IMDB</a>
              <button className="btn btn-info b2" onClick={() => this.props.history.goBack()}>Back To Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;