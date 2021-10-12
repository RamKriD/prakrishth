import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import App from './App'

describe('App component', () => {

  test('should have the right message in the dom', () => {
    render(<App />)
    const message = 'Prakrishth';

    expect(screen.getByText(message)).toBeInTheDocument()
  })
})