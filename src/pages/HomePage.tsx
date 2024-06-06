import { gql, useQuery } from 'urql'

const query = gql`
  query Home {
    allPeople {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const HomePage = () => {
  const [data] = useQuery({ query })

  return (
    <div>
      <h1>Home</h1>
      {data.fetching
        ? 'Loading...'
        : data.error
          ? 'Error!'
          : data.data.allPeople.edges.map((edge: any) => (
              <div key={edge.node.id}>
                <a href={'/person/' + edge.node.id}>{edge.node.name}</a>
              </div>
            ))}
    </div>
  )
}

export default HomePage
