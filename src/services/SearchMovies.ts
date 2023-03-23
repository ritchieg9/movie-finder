export function SearchMovies(search: string): Promise<any[]> {
  return fetch(
    "https://www.omdbapi.com/?apikey=6b781fb6&s=" + search,
    {
      method: "GET",
    }
  )
    .then((r) => r.json())
    .then((r) => r.Search)
    .catch((error) => {
      console.error(error);
      return [];
    });
}