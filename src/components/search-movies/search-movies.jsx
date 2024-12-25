import useSearchMovies from '@/hooks/useSearchMovies'
import Prueba from '../carousel/carousel'
import MovieList from './results-search'

export default function SearchMovies() {
  const { movies, keyword } = useSearchMovies()
  return (
    <>
      <Prueba />
      <h1>Los resultados son {keyword} </h1>
      <MovieList movies={movies} />
    </>
  )
}
