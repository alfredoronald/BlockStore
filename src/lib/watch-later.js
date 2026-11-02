const STORAGE_KEY = 'watch-later'

export function getWatchLater() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(stored) ? stored : []
  } catch {
    return []
  }
}

export function saveForLater(movie) {
  if (!movie?.id) return

  const list = getWatchLater()
  if (list.some((item) => item.id === movie.id)) return

  const saved = {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...list, saved]))
}
