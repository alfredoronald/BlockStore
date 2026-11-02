import PropTypes from 'prop-types'
import WatchButtons from '@/components/buttons/watch-buttons'
import './modal.css'

Modal.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  setModal: PropTypes.func,
  modal: PropTypes.bool,
}

export default function Modal({ movie, setModal, modal }) {
  if (!movie) return null

  const roundRating = (num) => Math.round(num * 10) / 10
  const getrating = (rating) => {
    return rating > 6 ? 'rating-vote-more' : 'rating-vote-less'
  }

  const { title, overview, release_date, poster_path, vote_average } = movie

  return (
    <>
      {modal && (
        <section className="modal-movies">
          <article className="modal-content">
            <div className="wacth-movie">
              <div className="rotate-image">
                <div className={`modal-rating-vote ${getrating(vote_average)}`}>
                  <strong className="m-rating-movies">
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
                    {roundRating(vote_average)}
                  </strong>
                </div>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    className="modal-image"
                  />
                </div>
              </div>
              <div className="description-movie">
                <div className="header-modal">
                  <button
                    onClick={() => setModal(!modal)}
                    className="button-delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon-tabler"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <h2>{title}</h2>
                <p>{overview}</p>
                <p className="movie-date">{release_date}</p>
                <WatchButtons movie={movie} variant="modal" />
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  )
}
