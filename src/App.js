import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import {Title} from './components/Title';
import {SearchForm} from './components/SearchForm';

class App extends Component {
  state = {movies: []}
  
  _handleResults = (movies) => {
    this.setState({movies})
  }

  _renderMovies = () => {
    let {movies} = this.state
    return movies.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }

  render () {
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="SearchForm">
          <SearchForm onResults={this._handleResults}></SearchForm>
        </div>
        {
          this.state.movies.length === 0 ? 
          <p>Sin resultados</p> :
          this._renderMovies()
        }
      </div>
    );
  }
}

export default App;