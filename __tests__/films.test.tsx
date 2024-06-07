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
      releaseDate: '1978-05-25',
      planetConnection: {
        planets: [{ surfaceWater: 50 }, { surfaceWater: 50 }],
      },
    },
    {
      id: 3,
      title: 'Film 3',
      releaseDate: '1979-05-25',
      planetConnection: {
        planets: [{ surfaceWater: 0 }, { surfaceWater: 0 }],
      },
    },
  ]

  const { getByText } = render(<Films films={films} />)

  expect(getByText('Film 1')).toBeInTheDocument()
  expect(getByText('Release Date: 1977-05-25')).toBeInTheDocument()
  expect(getByText('1 planet without water')).toBeInTheDocument()

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
  expect(getByText('Release Date: 1978-05-25')).toBeInTheDocument()
  expect(getByText('0 planet without water')).toBeInTheDocument()

  act(() => {
    const nextButton = getByText('Next')
    fireEvent.click(nextButton)
  })
  expect(getByText('Film 3')).toBeInTheDocument()
  expect(getByText('Release Date: 1979-05-25')).toBeInTheDocument()
  expect(getByText('2 planets without water')).toBeInTheDocument()

  act(() => {
    const nextButton = getByText('Next')
    fireEvent.click(nextButton)
  })
  expect(getByText('Film 3')).toBeInTheDocument()
})
