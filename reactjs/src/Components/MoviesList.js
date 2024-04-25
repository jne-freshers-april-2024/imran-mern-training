import React from "react";
import './UnderstandReactLifeCycle.css'
const MoviesList = (props) => {
  return (
    <div>
      <ul>
      {props.data.map((movies) => (
        <li key={movies.id}>
          Movie id : {movies.id} movieName : {movies.movie}
        </li>
      ))}
      </ul>
    </div>
  );
};
export default MoviesList;

