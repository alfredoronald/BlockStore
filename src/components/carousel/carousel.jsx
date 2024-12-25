import Glide from '@glidejs/glide'
import { useEffect, useState } from 'react'
import '@glidejs/glide/dist/css/glide.core.min.css'
import './carousel.css'

export default function Carousel({ movies }) {
  const [moviesCarousel, setMoviesCarousel] = useState([])
  const [watchMovie, setWatchMovie] = useState(false)
  const handleClick = () => {
    setWatchMovie(!watchMovie)
    console.log(!watchMovie)
  }
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMoviesCarousel(data.results)
      })
      .catch((error) => console.error('Error en obtener lo datos' + error))
  }, [])

  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
    })

    glide.mount()
  }, [moviesCarousel])
  const filteredMovies = moviesCarousel.filter((movie) => movie.id === 1)
  return (
    <section className="carousel">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              {filteredMovies.map((movie) => {
                return (
                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  ></img>
                )
              })}
              <div className="buttons-wacht">
                <button onClick={handleClick} className="button-now">
                  VER AHORA
                </button>
                <button onClick={handleClick} className="button-after">
                  VER DESPUES
                </button>
              </div>
            </li>
            <li className="glide__slide">
              <img src="/raya.png" alt="mulan-img" />
              <div className="buttons-wacht">
                <button onClick={handleClick} className="button-now">
                  VER AHORA
                </button>
                <button onClick={handleClick} className="button-after">
                  VER DESPUES
                </button>
              </div>
            </li>
            <li className="glide__slide">
              <img src="/unidos.png" alt="mulan-img" />
              <div className="buttons-wacht">
                <button onClick={handleClick} className="button-now">
                  VER AHORA
                </button>
                <button onClick={handleClick} className="button-after">
                  VER DESPUES
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="glide">
          <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
          </div>
        </div>
      </div>
    </section>
  )
}
