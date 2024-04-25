import React from "react";
import { useState ,useEffect } from "react";
import "./UnderstandReactLifeCycle.css";
import MoviesList from "./MoviesList";
const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(()=>{
    console.log("useeffect");
    const getAllMoviesData = async () => {
        try{
          const data = await fetch("https://dummyapi.online/api/movies");
          if (!data.ok) {
            throw new Error("Failed to fetch users");
          }
          const finalData = await data.json();
          setMoviesData(finalData);
        }catch(error){
           console.log("Error to fetch api",error);
        }
      };
      getAllMoviesData();
  },[]);
 
  return (
    <div className="app">
      <h1 style={{textAlign:'center'}}> Movies Data </h1>
      <MoviesList data={moviesData} />
    </div>
  );
};
export default Movies;


