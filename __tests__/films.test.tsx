import { expect, test } from 'vitest'
import { render, act, fireEvent } from '@testing-library/react'
import Films from '../src/components/films'

test('renders Films component', () => {
  const films = [
    {
      id: 1,
      title: 'Film 1',
      releaseDate: '1977-05-25',
      planetConnection: {
        planets: [{ surfaceWater: 0 }, { surfaceWater: 50 }],
      },
    },
    {
      id: 2,
      title: 'Film 2',
      releaseDate: '1977-05-25',
      planetConnection: {
        planets: [{ surfaceWater: 0 }, { surfaceWater: 50 }],
      },
    },
    {
      id: 3,
      title: 'Film 3',
      releaseDate: '1977-05-25',
      planetConnection: {
        planets: [{ surfaceWater: 0 }, { surfaceWater: 50 }],
      },
    },
  ]

  const { getByText } = render(<Films films={films} />)

  expect(getByText('Film 1')).toBeInTheDocument()
  act(() => {
    const previousButton = getByText('Previous')
    fireEvent.click(previousButton)
  })
  expect(getByText('Film 1')).toBeInTheDocument()

  act(() => {
    const nextButton = getByText('Next')
    fireEvent.click(nextButton)
  })
  expect(getByText('Film 2')).toBeInTheDocument()

  act(() => {
    const nextButton = getByText('Next')
    fireEvent.click(nextButton)
  })
  expect(getByText('Film 3')).toBeInTheDocument()

  act(() => {
    const nextButton = getByText('Next')
    fireEvent.click(nextButton)
  })
  expect(getByText('Film 3')).toBeInTheDocument()
})
