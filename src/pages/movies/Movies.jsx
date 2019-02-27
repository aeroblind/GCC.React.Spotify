import React, { Component } from 'react';
import * as OmdbApi from '../../_api/omdbApi';
import MovieCard from '../../components/movieCard';

import './Movies.css';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);

    this.history = props.history;

    this.state = {
      movies: [],
      searchStr: 'Die Hard'
    }
  }

  componentDidMount() {
    this.searchMoviesWithString(this.state.searchStr);
  }
  
  async searchMoviesWithString(searchStr) {
    try {
      const response = await OmdbApi.search(searchStr)
      this.setState({
        movies: response.data.Search || []
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleButtonClick(e, id) {
    this.history.push(`/${id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.searchMoviesWithString(this.state.searchStr)
  }

  handleSearchInput(e){
    this.setState({
      searchStr: e.target.value
    })
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Die Hard..." aria-label="Search" onChange={this.handleSearchInput}/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div className="movie-list">
          {movies.length >= 0 && movies.map((movie, index) => {
            return <MovieCard key={index} movie={movie} onButtonClick={this.handleButtonClick}></MovieCard>
          })}
        </div>
      </div>
    );
  }
}

export default Movies 