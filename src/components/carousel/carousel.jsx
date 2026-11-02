import Glide from '@glidejs/glide'
import { useEffect, useState, useRef } from 'react'
import '@glidejs/glide/dist/css/glide.core.min.css'
import { tmdbFetch } from '@/lib/tmdb'
import WatchButtons from '@/components/buttons/watch-buttons'
import './carousel.css'

export default function Carousel() {
  const [moviesCarousel, setMoviesCarousel] = useState([])
  const rootRef = useRef(null)

  useEffect(() => {
    tmdbFetch('/movie/now_playing')
      .then((data) => setMoviesCarousel(data.results || []))
      .catch((error) => console.error('Error al obtener los datos', error))
  }, [])

  useEffect(() => {
    if (!rootRef.current || moviesCarousel.length === 0) return
    const glide = new Glide(rootRef.current, {
      type: 'carousel',
      perView: 1,
    })
    glide.mount()
    return () => {
      glide.destroy()
    }
  }, [moviesCarousel.length])

  return (
    <section className="carousel">
      <div className="glide" ref={rootRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {moviesCarousel.slice(0, 5).map((movie) => (
              <li className="glide__slide" key={movie.id}>
                <img
                  className="carousel__image"
                  src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path}`}
                  alt={movie.title}
                />
                <WatchButtons movie={movie} />
              </li>
            ))}
          </ul>
        </div>

        <div className="glide__bullets" data-glide-el="controls[nav]">
          {moviesCarousel.slice(0, 5).map((movie, i) => (
            <button
              key={movie.id}
              className="glide__bullet"
              data-glide-dir={`=${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
