import React from 'react';

const MovieCardDeletable = (props) => {
    return <div>
        <h2>{props.movie.title}</h2>
        <p>
            by {props.movie.director}
        </p>
        <p>
            Rating: {props.movie.IMDbRating}
        </p>
        <p>
            {
                props.movie.hasOscars ? 'Got the Oscar Award!' : 'Great movie but no Oscars!'
            }
        </p>
        <button onClick={() => props.deleteMovie(props.movie.id)}>Delete</button>
    </div>
};

export default MovieCardDeletable;