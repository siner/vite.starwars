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

  if (data.fetching) return <div>Fetching...</div>
  if (data.error) return <div>Error!</div>

  return (
    <div className="h-screen flex flex-col space-y-10 pt-10 items-center justify-start font-starjedi">
      <h1 className="text-4xl lg:text-6xl text-starwarsyellow font-starjedihollow">
        People
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {data.data.allPeople.edges.map((edge: any) => (
          <div key={edge.node.id}>
            <a
              href={'/person/' + edge.node.id}
              className="hover:text-starwarsyellow hover:underline"
            >
              {edge.node.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
