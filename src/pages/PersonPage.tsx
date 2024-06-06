import { useParams } from 'react-router-dom'
import { gql, useQuery } from 'urql'
import Spinner from '../components/spinner'

const query = gql`
  query Person($personId: ID!) {
    person(id: $personId) {
      id
      name
      birthYear
      species {
        averageHeight
      }
      filmConnection {
        films {
          id
          releaseDate
          producers
          title
          planetConnection {
            planets {
              id
              surfaceWater
            }
          }
        }
      }
    }
  }
`

const PersonPage = () => {
  let { personId } = useParams()

  const [data] = useQuery({ query, variables: { personId: personId } })

  if (data.fetching) return <Spinner />
  if (data.error) return <div>Error!</div>

  const allFilms = data.data.person.filmConnection.films
  const producers = allFilms.map((film: any) => film.producers).flat()
  const allProducers = producers.reduce(
    (map: { [x: string]: any }, val: string | number) => {
      map[val] = (map[val] || 0) + 1
      return map
    },
    {}
  )

  const films = allFilms.map((film: any) => (
    <div key={film.id}>
      <h2>{film.title}</h2>
      <p>Release Date: {film.releaseDate}</p>
      {
        film.planetConnection.planets.filter((planet: any) => {
          return planet.surfaceWater <= 0
        }).length
      }{' '}
      planets without water
    </div>
  ))

  return (
    <>
      <h1 className="text-4xl text-starwarsyellow font-starjedi">
        {data.data.person.name}
      </h1>
      <p>Birth Year: {data.data.person.birthYear}</p>
      {data.data.person.species && (
        <p>
          Average Height of Species: {data.data.person.species.averageHeight}
        </p>
      )}
      <strong>Producers:</strong>
      <ul>
        {Object.keys(allProducers).map((producer) => (
          <li key={producer}>
            {producer} ({allProducers[producer]})
          </li>
        ))}
      </ul>
      {films}
    </>
  )
}

export default PersonPage
