import React, { useState } from 'react'
import Movies from '../../components/movies/movies'

const WatchMovie = ({ movies, title, descripition }) => {
  const [selectWatchMovie, setSelectedWatchMpvie] = useState([])

  return (
    <>
      <h1>Nombre de la Pelicula</h1>
      <div>
        <video height="400px" width="100%" src="" autoPlay muted controls>
          <source />
        </video>
        <article>
          <span>Ficcion asdfkaiosjfoi</span>
          <p>{descripition}</p>
        </article>
        <section>
          <h1>Peliculas Similares</h1>
          <Movies movies={movies} />
        </section>
      </div>
    </>
  )
}

export default WatchMovie
