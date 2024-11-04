import { useState } from 'react'
import useMovies from '../../hooks/useMovies'
import Modal from '../../modals/Modal'
import './no-results.css'

function ListofMovies({ movies }) {
  const roundRating = (num) => Math.round(num * 10) / 10
  const [modal, setModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const openModal = (movie) => {
    setSelectedMovie(movie)
    setModal(true)
  }
  const closeModal = () => {
    setSelectedMovie(null)
    setModal(false)
  }
  return (
    <>
      <div className="cards-movies">
        {movies.map((movie) => (
          <ul key={movie.id}>
            <div className="rating-vote">
              <strong className="rating-movies">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.5003 17.877L19.3313 22L17.5183 14.23L23.5533 9.002L15.6063 8.328L12.5003 1L9.39427 8.328L1.44727 9.002L7.48227 14.23L5.66927 22L12.5003 17.877Z"
                    fill="#FED941"
                  />
                </svg>
                {roundRating(movie.vote_average)}
              </strong>
            </div>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="card-images"
                onClick={() => openModal(movie)}
              />
            </div>
          </ul>
        ))}
        {selectedMovie && (
          <Modal
            img={selectedMovie.poster_path}
            title={selectedMovie.title}
            text={selectedMovie.overview}
            date={selectedMovie.release_date}
            average={selectedMovie.vote_average}
            modal={modal}
            setModal={closeModal}
          />
        )}
      </div>
    </>
  )
}

function NoMoviesResults({ keyword }) {
  return (
    <section className="no-results-movies">
      <img
        src="../../../public/Stuck at Home Searching.svg"
        alt="No results search mocies"
        className="no-results-img"
      />
      <p>No se encontraron películas para esta búsqueda {keyword}</p>
    </section>
  )
}

function ResultsMovies() {
  const { movies, keyword } = useMovies()
  const list = movies?.length > 0
  return list ? (
    <ListofMovies movies={movies} />
  ) : (
    <NoMoviesResults keyword={keyword} />
  )
}
export default ResultsMovies
