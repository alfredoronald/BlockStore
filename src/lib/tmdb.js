const token = import.meta.env.VITE_API_TOKEN

export async function tmdbFetch(path) {
  if (!token) {
    throw new Error('Falta VITE_API_TOKEN en el archivo .env')
  }

  const response = await fetch(`https://api.themoviedb.org/3${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Error de TMDB (${response.status} ${response.statusText})`)
  }

  return response.json()
}

export default tmdbFetch
