export interface Film {
  id: string
  title: string
  releaseDate: string
  producers: string[]
  planetConnection: PlanetConnection
}

export interface FilmConnection {
  films: Film[]
}

export interface Planet {
  id: string
  surfaceWater: number
}

export interface PlanetConnection {
  planets: Planet[]
}

export interface Species {
  averageHeight: number
}

export interface Person {
  id: string
  name: string
  birthYear: string
  species: Species | null
  filmConnection: FilmConnection
}

export const getPersonFilms = (person: Person) => {
  return person.filmConnection.films
}

export const getPersonProducers = (films: Film[]) => {
  const producers = films.map((film: Film) => film.producers).flat()
  const allProducers = producers.reduce(
    (map: { [x: string]: any }, val: string | number) => {
      map[val] = (map[val] || 0) + 1
      return map
    },
    {}
  )
  return allProducers
}
