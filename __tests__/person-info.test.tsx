import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import PersonInfo from '../src/components/person-info'
import { Person } from '../src/services/person'

test('renders person info', () => {
  const person: Person = {
    id: '1',
    filmConnection: {
      films: [],
    },
    name: 'Luke Skywalker',
    birthYear: '19BBY',
    species: {
      averageHeight: 180,
    },
  }

  render(<PersonInfo person={person} />)

  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
  expect(screen.getByText('Birth Year: 19BBY')).toBeInTheDocument()
  expect(screen.getByText('Average Height of Species: 180')).toBeInTheDocument()
})
