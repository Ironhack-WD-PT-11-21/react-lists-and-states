import React from 'react';

export default class AddMovieForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: ''
        }
    }

    handleTitle = (event) => {
        const { value } = event.target;
        this.setState({
            ...this.state,
            title: value
        })
    }
    handleDirector = (event) => {
        const { value } = event.target;
        this.setState({
            ...this.state,
            director: value
        })
    }
    handleOscar = (event) => {
        const { checked } = event.target;
        this.setState({
            ...this.state,
            hasOscars: checked
        })
    }
    handleRating = (event) => {
        const { value } = event.target;
        this.setState({
            ...this.state,
            IMDbRating: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMovieToList({
            ...this.state,
            id: `${Math.random() * 1000}`
        })
        this.setState({
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input type="text" onChange={this.handleTitle} value={this.state.title} />

                <label>Director</label>
                <input type="text" onChange={this.handleDirector} value={this.state.director} />

                <label>Oscar</label>
                <input type="checkbox" onChange={this.handleOscar} checked={this.state.hasOscars} />

                <label>IMDB rating</label>
                <input type="text" onChange={this.handleRating} value={this.state.IMDbRating} />

                <button type="submit">Add movie</button>
            </form>
        )
    }
}