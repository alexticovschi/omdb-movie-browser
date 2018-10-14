import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import MovieList from '../components/MovieList';

import './App.css';


class App extends Component {
  state = {
    search_term : '',
    movies: []  
  }

  componentDidMount() {
    this.getMovies();
  }

  onSearchChange = (event) => {
    event.preventDefault();

    this.setState({ search_term: event.target.value });
    console.log('[searchField]:',this.state.search_term);
  }

  getMovies = async () => {
    const APIKEY = '65480b96';

    const resp = await fetch(`http://www.omdbapi.com/?s=${this.state.search_term}&apikey=${APIKEY}`);

        // Wait for the response and return as JSON
        const movies = await resp.json();

        this.setState({ movies: movies.Search });
        console.log('[MOVIE LIST]:',this.state.movies);
  }

  render() {
    return (
      <div className="App">
        <SearchBox 
          onSearchChange={this.onSearchChange}
          getMovies={this.getMovies}/> 
        <MovieList 
          movieList={this.state.movies} 
        />
      </div>
    );
  }
}

export default App;
