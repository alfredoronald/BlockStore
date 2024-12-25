import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  const param = window.location.pathname
  const [setHover] = useState(param)
  const [keyword, setKeyword] = useState('')

  const handlehover = (param) => setHover(param)

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/searchmovie?query=${keyword}`)
  }
  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <header className="navigation">
      <div className="navigation-logo">
        <a href="">
          <img src="/logo-blockBuster.png" alt="logo" />
        </a>
      </div>
      <nav className="navigation-link">
        <ul>
          <li>
            <Link to="/all-movies" onClick={() => handlehover('/all-movies')}>
              Todas
            </Link>
          </li>
          <li>
            <Link
              to="/more-valued-movies"
              onClick={() => handlehover('/more-valued-movies')}
            >
              Mas Valoradas
            </Link>
          </li>
          <li>
            <Link
              to="/less-valued-movies"
              onClick={() => handlehover('less-valued-movies')}
            >
              Menos Valoradas
            </Link>
          </li>
        </ul>
      </nav>

      <form className="navigation-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca tu pelicula .."
          className="submit-text"
          onChange={handleChange}
          id="search"
        />
        <button className="button-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 2C5.14585 2 2 5.14585 2 9C2 12.8541 5.14585 16 9 16C10.748 16 12.345 15.348 13.5742 14.2812L14 14.707V16L20 22L22 20L16 14H14.707L14.2812 13.5742C15.348 12.345 16 10.748 16 9C16 5.14585 12.8541 2 9 2ZM9 4C11.7733 4 14 6.22673 14 9C14 11.7733 11.7733 14 9 14C6.22673 14 4 11.7733 4 9C4 6.22673 6.22673 4 9 4Z"
              fill="black"
            />
          </svg>
        </button>
      </form>
    </header>
  )
}
