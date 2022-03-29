import React from 'react';
import MovieCardDeletable from './MovieCardDeletable'

class DynamicList extends React.Component {
    constructor() {
        super()
        this.state = {
            showOscars: false,
            listOfMovies: [
                { id: "fUbJPciPq", title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { id: "EXN9npPlo", title: "Star Wars", director: "Rian Johnson", hasOscars: true, IMDbRating: 8.7 },
                { id: "lecqGHnAb", title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
            ]
        }
    }

    handleDeleteMovie = (id) => {
        const updatedList = this.state.listOfMovies.filter((movies) => {
            return movies.id !== id;
        });
        this.setState({
            ...this.state,
            listOfMovies: updatedList
        });
    }

    handleFilter = () => {
        this.setState({
            ...this.state,
            showOscars: !this.state.showOscars
        });
    }

    render() {
        const movieCardList = this.state.listOfMovies
            .filter((movie) => {
                return movie.hasOscars === this.state.showOscars
            })
            .map((movie) => {
                return <MovieCardDeletable
                    key={movie.id}
                    movie={movie}
                    deleteMovie={this.handleDeleteMovie}
                />
            })
        return (
            <div>
                <button onClick={this.handleFilter}>
                    {
                        this.state.showOscars ? "Show me the other ones" : "Show me Oscar winners !"
                    }
                </button>
                {movieCardList}
            </div>
        )
    }

}

export default DynamicList;