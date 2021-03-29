import React from "react";
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";
function MovieList (props){
return (
props.obj.map((item, index)=><Link to={`/description/${item.id}`}> <MovieCard movie={item} key={index} /></Link>)
);
}
export default MovieList;
  