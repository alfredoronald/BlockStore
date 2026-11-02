import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { tmdbFetch } from '@/lib/tmdb'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

function useSearchMovies() {
  const query = useQuery()
  const [movies, setMovies] = useState([])
  const keyword = query.get('query') || ''
  useEffect(() => {
    const fetchMovies = (query) => {
      tmdbFetch(`/search/movie?query=${encodeURIComponent(query)}`)
        .then((data) => {
          setMovies(data.results || [])
        })
        .catch((error) =>
          console.error('No se lograron obtener los datos:', error),
        )
    }
    if (keyword) {
      fetchMovies(keyword)
    }
  }, [keyword])
  return { movies, keyword }
}
export default useSearchMovies
