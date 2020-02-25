import React, { Component } from 'react';

import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {
    state = { usedSearch: false, movies: [], totalResults: 0 }

    _handleResults = (movies, totalResults) => {
        this.setState({ movies, usedSearch: true, totalResults })
    }

    _renderResults = () => {
        if (this.state.totalResults > 0)
            return <MoviesList movies={this.state.movies} totalResults={this.state.totalResults} />

        return <p>Sin resultados</p>
    }

    render() {
        return (
            <div>
                <Title>Search movies</Title>
                <div className="SearchForm">
                    <SearchForm onResults={this._handleResults}></SearchForm>
                </div>
                {
                    this.state.usedSearch ?
                        this._renderResults() :
                        <small>Search a movie</small>
                }
            </div>
        )
    }
}