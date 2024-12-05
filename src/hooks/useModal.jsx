export const openModal = (movie, setSelectedMovie, setModal) => {
  setSelectedMovie(movie)
  setModal(true)
}
export const closeModal = (setSelectedMovie, setModal) => {
  setSelectedMovie(null)
  setModal(false)
}
