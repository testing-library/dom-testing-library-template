import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../'

test('increments the count', () => {
  const {getByText} = render(<Counter />)
  const button = getByText('0')
  fireEvent.click(button)
  expect(button).toHaveTextContent('1')
  fireEvent.click(button)
  expect(button).toHaveTextContent('2')
})

