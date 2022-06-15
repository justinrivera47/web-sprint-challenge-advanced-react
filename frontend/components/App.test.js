// Write your tests here
import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppClass from './AppClass'
import AppFunctional from './AppFunctional'


beforeEach(() => {
  render(
  <AppClass />
  )
})

describe('AppClass component', () => {
  test('render without crashing', () => {
    render(<AppClass />)
  })
})

test("Email to be true", () => {
  render(<AppFunctional />)

  const emailField = screen.queryAllByPlaceholderText(/type email/i)

  expect(emailField).toBeTruthy()
})