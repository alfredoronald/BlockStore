import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { tmdbFetch } from '@/lib/tmdb'
import Movies from '@/components/movies/movies'
import './WatchMovie.css'

function pickVideo(videos = []) {
  const trailerMovie = videos.filter((video) => video.site === 'YouTube')

  return (
    trailerMovie.find((video) => video.type === 'Trailer' && video.official) ||
    trailerMovie.find((video) => video.type === 'Trailer') ||
    trailerMovie.find((video) => video.type === 'Teaser') ||
    trailerMovie[0] ||
    null
  )
}

export default function WatchMovie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [video, setVideo] = useState(null)

  useEffect(() => {
    if (!id) return

    let cancelled = false

    Promise.all([tmdbFetch(`/movie/${id}`), tmdbFetch(`/movie/${id}/videos`)])
      .then(([movieData, videosData]) => {
        if (cancelled) return
        setMovie(movieData)
        setVideo(pickVideo(videosData.results))
      })
      .catch((error) => console.error('Error al obtener la película', error))

    return () => {
      cancelled = true
    }
  }, [id])

  return (
    <>
      <h1>{movie?.title || 'Nombre de la Pelicula'}</h1>
      <div className="watch-movie">
        {video ? (
          <div className="watch-movie__player">
            <iframe
              src={`https://www.youtube.com/embed/${video.key}?rel=0`}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="watch-movie__empty">
            {movie
              ? 'No hay tráiler disponible para esta película.'
              : 'Cargando tráiler...'}
          </p>
        )}
        <article>
          <span>{movie?.release_date || 'Ficcion'}</span>
          <p>{movie?.overview}</p>
        </article>
        <section>
          <h1>Peliculas Similares</h1>
          <Movies />
        </section>
      </div>
    </>
  )
}
