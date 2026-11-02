import { useNavigate } from 'react-router-dom'
import { saveForLater } from '@/lib/watch-later'
import './watch-buttons.css'

export default function WatchButtons({
  movie,
  variant = 'default',
  onWatch,
  onSaveLater,
}) {
  const navigate = useNavigate()

  const handleWatch = () => {
    if (onWatch) return onWatch(movie)
    navigate(`/watch-movie/${movie.id}`)
  }

  const handleSaveLater = () => {
    if (onSaveLater) return onSaveLater(movie)
    saveForLater(movie)
  }

  return (
    <div className={`watch-buttons watch-buttons--${variant}`}>
      <button type="button" className="watch-buttons__now" onClick={handleWatch}>
        VER AHORA
      </button>
      <button
        type="button"
        className="watch-buttons__later"
        onClick={handleSaveLater}
      >
        VER DESPUÉS
      </button>
    </div>
  )
}
