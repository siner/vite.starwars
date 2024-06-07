import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Producers from '../src/components/producers'

test('renders producers correctly', () => {
  const producers = {
    producer1: 10,
    producer2: 5,
    producer3: 8,
  }

  const { getByText } = render(<Producers producers={producers} />)

  expect(getByText('producer1 (10)')).toBeInTheDocument()
  expect(getByText('producer2 (5)')).toBeInTheDocument()
  expect(getByText('producer3 (8)')).toBeInTheDocument()
})
