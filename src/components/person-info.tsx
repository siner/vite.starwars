import { Person } from '../services/person'
import Films from './films'
import { getPersonFilms, getPersonProducers } from '../services/person'
import Producers from './producers'

export default function PersonInfo({ person }: { person: Person }) {
  const allFilms = getPersonFilms(person)
  const producers = getPersonProducers(allFilms)

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-4xl text-starwarsyellow font-starjedihollow text-center mb-10">
        {person.name}
      </h1>
      <p>Birth Year: {person.birthYear}</p>
      {person.species && (
        <p>
          Average Height of Species: {person.species.averageHeight || 'unknown'}
        </p>
      )}
      <Producers producers={producers} />
      <Films films={allFilms} />
    </div>
  )
}
