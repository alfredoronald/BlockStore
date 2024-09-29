
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Prueba from './components/carousel/carousel'
import AllMovies from './pages/all-movies/all-movies'

function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<AllMovies/>}/>
          <Route path="/all-movies" element={<AllMovies/>}/>
          <Route path="/more-valued-movies" element={<Prueba/>}/>
          <Route path="/less-valued-movies" element={<Prueba/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
