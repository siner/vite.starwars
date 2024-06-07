import { useEffect, useState } from 'react'
import { gql, useQuery } from 'urql'
import { Person } from '../services/person'

const query = gql`
  query Home {
    allPeople {
      people {
        id
        name
      }
    }
  }
`

export const useFetchPersons = () => {
  const [persons, setPersons] = useState<Person[] | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(false)

  const [data] = useQuery({
    query,
  })

  useEffect(() => {
    if (data.error) {
      setError(true)
    }
    if (!data.fetching) {
      setPersons(data.data.allPeople.people)
      setIsFetching(false)
    }
  }, [data])

  return { persons, isFetching, error }
}
