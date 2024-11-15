import { useEffect, useState } from 'react'

import './movies.css'
import Modal from '../../modals/Modal'

export default function Movies() {
  const roundRating = (num) => Math.round(num * 10) / 10
  const [movies, setMovies] = useState([])
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
  const getrating = (rating) => {
    return rating > 6 ? 'rating-vote-more' : 'rating-vote-less'
  }

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=6b0870438e7196dea8473f4a56574f76',
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
      .catch((error) => console.error('Error en obtener lo datos' + error))
  }, [])
  return (
    <>
      <section className="cards-movies">
        {movies.map((movie) => {
          const roundedRating = roundRating(movie.vote_average)
          return (
            <ul key={movie.id}>
              <div className={`rating-vote ${getrating(roundedRating)}`}>
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
                  {roundedRating}
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
          )
        })}
        {selectedMovie && (
          <Modal
            title={selectedMovie.title}
            text={selectedMovie.overview}
            date={selectedMovie.release_date}
            image={selectedMovie.poster_path}
            average={selectedMovie.vote_average}
            setModal={closeModal}
            modal={modal}
          />
        )}
      </section>
    </>
  )
}
