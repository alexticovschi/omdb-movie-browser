import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    movies: []  
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const APIKEY = '65480b96';

    const resp = await fetch(`http://www.omdbapi.com/?s=marvel&apikey=${APIKEY}`);

        // Wait for the response and return as JSON
        const movies = await resp.json();

        this.setState({ movies: movies.Search });
        console.log('[MOVIE LIST]:',this.state.movies);
  }

  render() {
    return (
      <div className="App">
        OMDb Movie Info - React
      </div>
    );
  }
}

export default App;
