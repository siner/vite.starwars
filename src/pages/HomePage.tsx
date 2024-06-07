import Spinner from '../components/ui/spinner'
import { useFetchPersons } from '../hooks/useFetchPersons'

const HomePage = () => {
  const { persons, isFetching, error } = useFetchPersons()

  if (isFetching) return <Spinner />
  if (error) return <div>Error!</div>
  if (!persons) return <div>No persons!</div>

  return (
    <>
      <h1 className="text-4xl lg:text-6xl text-starwarsyellow font-starjedihollow">
        People
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4 font-starjedirounded mb-10">
        {persons.map((person: any) => (
          <div key={person.id}>
            <a
              href={'/person/' + person.id}
              className="hover:text-starwarsyellow hover:underline"
            >
              {person.name}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage
