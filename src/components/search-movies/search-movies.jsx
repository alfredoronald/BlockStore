import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import Prueba from "../carousel/carousel"

import MovieList from "./results-search";

const useQuery =()=>{
    return new URLSearchParams(useLocation().search);
}
export default function SearchMovies(){
    const query = useQuery();
    const keyword = query.get('query')||'';
    const [movies ,setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async (query) => {
            const apiKey = '6b0870438e7196dea8473f4a56574f76';
            const response = await fetch(
              `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
            );
            const data = await response.json();
            setMovies(data.results);
        };
        if(keyword){
            fetchMovies(keyword)
        }
    },[keyword]);
   
    return(
        <>
        <Prueba/>
        <h1>Los resultados son {keyword} </h1>
        <MovieList movies={movies}/>
        </>
    )

}