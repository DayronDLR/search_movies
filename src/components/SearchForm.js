import React, { Component } from 'react';

const API_KEY = '4287ad07'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (oEvent) => {
        this.setState({ inputMovie: oEvent.target.value })
    }

    _handleSubmit = (oEvent) => {
        oEvent.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
            .then(res => res.json())
            .then(oData => {
                var { Search = [], totalResults = 0 } = oData
                this.props.onResults(Search, totalResults)
            })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            placeholder="Find a repository"
                            type="text" />
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}