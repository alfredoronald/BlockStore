import { useEffect, useState } from 'react'

export function useMovies() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || [])
      })
      .catch((error) => console.error('Error en obtener lo datos' + error))
  }, [])
  return { movies }
}

export default useMovies
