import { useParams } from 'react-router-dom'
import { gql, useQuery } from 'urql'
import Spinner from '../components/spinner'
import { useState } from 'react'
import Film from '../components/film'
import Button from '../components/button'

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

  const [currentFilm, setCurrentFilm] = useState(0)

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

  return (
    <div className="w-full md:w-1/3">
      <div className="flex justify-end mb-5">
        <a
          href="/"
          className="text-starwarsyellow hover:text-starwarsyellow hover:underline"
        >
          Back to Home
        </a>
      </div>
      <h1 className="text-4xl text-starwarsyellow font-starjedihollow text-center mb-10">
        {data.data.person.name}
      </h1>
      <div className="flex flex-col space-y-4">
        <p>Birth Year: {data.data.person.birthYear}</p>
        {data.data.person.species && (
          <p>
            Average Height of Species:{' '}
            {data.data.person.species.averageHeight || 'unknown'}
          </p>
        )}
        <h2 className="text-starwarsyellow text-2xl">Producers:</h2>
        <ul>
          {Object.keys(allProducers).map((producer) => (
            <li key={producer}>
              {producer} ({allProducers[producer]})
            </li>
          ))}
        </ul>
        <h2 className="text-starwarsyellow text-2xl">Films:</h2>

        <Film film={allFilms[currentFilm]} />

        <div className="flex space-x-10 justify-between flex-wrap">
          <Button
            disabled={currentFilm === 0}
            onClick={() => setCurrentFilm((currentFilm - 1) % allFilms.length)}
          >
            Previous
          </Button>

          <Button
            disabled={currentFilm === allFilms.length - 1}
            onClick={() => setCurrentFilm((currentFilm + 1) % allFilms.length)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PersonPage
