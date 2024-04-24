import React from "react";
import { useState ,useEffect } from "react";
import "./UnderstandReactLifeCycle.css";
import MoviesList from "./MoviesList";
const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(()=>{
    const getAllMoviesData = async () => {
        const data = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
        const finalData = await data.json();
        setMoviesData(finalData);
      };
  },[]);
 
  return (
    <div className="app">
      <h1> Movies Data </h1>
      <MoviesList data={moviesData} />
    </div>
  );
};
export default Movies;


