import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import MovieList from '../components/MovieList';
import Header from '../components/Header';

import './App.css';

class App extends Component {
  state = {
    search_term : '',
    movies: []  
  }

  componentDidMount(){
    this.hydrateStateWithLocalStorage();
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  onSearchChange = (event) => {
    event.preventDefault();

    this.setState({ search_term: event.target.value });
    // console.log('[searchField]:',this.state.search_term);
  }

  getMovies = async () => {
    const APIKEY = '65480b96';

    const resp = await fetch(`http://www.omdbapi.com/?s=${this.state.search_term}&apikey=${APIKEY}`);

    // Wait for the response and return as JSON
    const movies = await resp.json();

    this.setState({ movies: movies.Search });
    // console.log('[MOVIE LIST]:',this.state.movies);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBox 
          onSearchChange={this.onSearchChange}
          getMovies={this.getMovies}/> 
        <MovieList 
          movieList={this.state.movies} 
          getMovieById={this.getMovieById}
        />
      </div>
    );
  }
}

export default App;
