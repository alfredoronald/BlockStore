import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

function useSearchMovies() {
  const query = useQuery()
  const [movies, setMovies] = useState([])
  const keyword = query.get('query') || ''
  useEffect(() => {
    const fetchMovies = (query) => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${import.meta.env.VITE_API_KEY}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results)
        })
        .catch((error) =>
          console.error('Nose lograron obtener lo datos:' + error),
        )
    }
    if (keyword) {
      fetchMovies(keyword)
    }
  }, [keyword])
  return { movies, keyword }
}
export default useSearchMovies
