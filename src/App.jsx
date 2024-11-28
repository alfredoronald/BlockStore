import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import AllMovies from './pages/all-movies/all-movies'
import MoreValuedMovies from './pages/more-valued-movies/more-valued'
import LessValuedMovies from './pages/less-valued-movies/less-valued'
import SearchMovies from './components/search-movies/search-movies'
import Modal from './modals/modal'
import WatchMovie from './pages/watch-movie/WatchMovie'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllMovies />} />
          <Route path="/all-movies" element={<AllMovies />} />
          <Route path="/more-valued-movies" element={<MoreValuedMovies />} />
          <Route path="/less-valued-movies" element={<LessValuedMovies />} />
          <Route path="/searchmovie" element={<SearchMovies />} />
          <Route
            path="/modal"
            element={
              <Modal
                title="default"
                text="text"
                date="date"
                image="image"
                average="averge"
              />
            }
          />
          <Route path="/watch-movie" element={<WatchMovie />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
