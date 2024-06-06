import { useParams } from 'react-router-dom'
import { gql, useQuery } from 'urql'

const query = gql`
  query Person($personId: ID!) {
    person(id: $personId) {
      id
      name
      height
      mass
      homeworld {
        name
      }
    }
  }
`

const PersonPage = () => {
  let { personId } = useParams()

  const [data] = useQuery({ query, variables: { personId: personId } })
  if (data.fetching) return <div>Fetching...</div>
  if (data.error) return <div>Error!</div>

  return (
    <div className="h-screen flex flex-col space-y-10 pt-10 items-center justify-start">
      <h1 className="text-4xl text-starwarsyellow font-starjedi">
        {data.data.person.name}
      </h1>
      <p>Height: {data.data.person.height}</p>
      <p>Mass: {data.data.person.mass}</p>
      <p>Homeworld: {data.data.person.homeworld.name}</p>
    </div>
  )
}

export default PersonPage
