import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Film from '../src/components/film'

test('renders film info', () => {
  const film = {
    id: '1',
    title: 'A New Hope',
    releaseDate: '1977-05-25',
    planetConnection: {
      planets: [{ surfaceWater: 0 }, { surfaceWater: 50 }],
    },
  }

  render(<Film film={film} />)

  expect(screen.getByText('A New Hope')).toBeInTheDocument()
  expect(screen.getByText('Release Date: 1977-05-25')).toBeInTheDocument()
  expect(screen.getByText('1 planet without water')).toBeInTheDocument()
})
