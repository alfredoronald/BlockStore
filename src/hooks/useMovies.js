import { useEffect, useState } from 'react'
import { tmdbFetch } from '@/lib/tmdb'

export function useMovies() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    tmdbFetch('/trending/movie/day')
      .then((data) => {
        setMovies(data.results || [])
      })
      .catch((error) => console.error('Error al obtener los datos', error))
  }, [])
  return { movies }
}

export default useMovies
