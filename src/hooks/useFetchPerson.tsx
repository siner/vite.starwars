import { useEffect, useState } from 'react'
import { gql, useQuery } from 'urql'
import { Person } from '../services/person'

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

export const useFetchPerson = (personId: string) => {
  const [person, setPerson] = useState<Person | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(false)

  const [data] = useQuery({
    query,
    variables: { personId },
  })

  useEffect(() => {
    if (data.error) {
      setError(true)
    }
    if (!data.fetching) {
      setPerson(data.data.person)
      setIsFetching(false)
    }
  }, [data])

  return { person, isFetching, error }
}
