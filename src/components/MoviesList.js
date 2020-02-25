import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import { Movie } from './Movie';

export class MoviesList extends Component {
    static propTypes = {
        movies: PropsTypes.array
    }

    render() {
        let { movies, totalResults } = this.props
        return (
            <div>
                <h2>{totalResults} coincidences</h2>
                <div className="MoviesList">
                    {
                        movies.map(movie => {
                            return (
                                <div className="MoviesList-item" key={movie.imdbID}>
                                    <Movie
                                        title={movie.Title}
                                        year={movie.Year}
                                        poster={movie.Poster} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}