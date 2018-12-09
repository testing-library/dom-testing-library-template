import {render} from 'react-testing-library'
import React from 'react'
import 'jest-dom/extend-expect'
import MyComponent from '../'

it('renders greeting', () => {
  const {container, queries} = render(<MyComponent />)
  expect(container.firstChild).toHaveTextContent('Hello, World')
})

