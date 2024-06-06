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

  return (
    <div>
      <h1>Person</h1>
      {data.fetching ? (
        'Loading...'
      ) : data.error ? (
        'Error!'
      ) : (
        <div>
          <h2>{data.data.person.name}</h2>
          <p>Height: {data.data.person.height}</p>
          <p>Mass: {data.data.person.mass}</p>
          <p>Homeworld: {data.data.person.homeworld.name}</p>
        </div>
      )}
    </div>
  )
}

export default PersonPage
