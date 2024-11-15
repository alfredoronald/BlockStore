import PropTypes from 'prop-types'
import './modal.css'

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  average: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
}

export default function Modal({
  title,
  text,
  date,
  image,
  average,
  setModal,
  modal,
}) {
  const roundRating = (num) => Math.round(num * 10) / 10
  const getrating = (rating) => {
    return rating > 6 ? 'rating-vote-more' : 'rating-vote-less'
  }

  return (
    <>
      {modal && (
        <section className="modal-movies">
          <article className="modal-content">
            <div className="wacth-movie">
              <div className="rotate-image">
                <div className={`modal-rating-vote ${getrating(average)}`}>
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
                    {roundRating(average)}
                  </strong>
                </div>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${image}`}
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
                <p>{text}</p>
                <p className="movie-date">{date}</p>
                <div className="buttons">
                  <button className="button-now-modal">
                   
                    VER AHORA
                  </button>
                  <button className="button-after-modal">
                    
                    VER DESPUES
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  )
}
