import { useParams } from 'react-router-dom'
import Spinner from '../components/ui/spinner'
import { useFetchPerson } from '../hooks/useFetchPerson'
import PersonInfo from '../components/person-info'

const PersonPage = () => {
  const { personId } = useParams()

  if (!personId) return <div>Miss parameters!</div>

  const { person, isFetching, error } = useFetchPerson(personId)

  if (isFetching) return <Spinner />
  if (error) return <div>Error!</div>
  if (!person) return <div>Person not found!</div>

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
      <div className="flex flex-col space-y-4">
        <PersonInfo person={person} />
      </div>
    </div>
  )
}

export default PersonPage
