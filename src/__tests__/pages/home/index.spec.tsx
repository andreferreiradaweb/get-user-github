import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';

import { Home } from '../../../pages/home'

const mockHandleClick = jest.fn()

jest.mock('../../../contexts/user', () => {
  return {
    ...jest.requireActual('../../../contexts/user'),
    useUserContext: () => ({
      getUser: mockHandleClick
    }),
  }
})

describe('Testing Home', () => {
  it("Should be able to make a request", () => {
    render(<Home />)

    const button = screen.getByTestId("home-button")
    fireEvent.click(button)

    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })
})

describe('Testing Home', () => {
  it("Should be able to type", () => {
    render(<Home />)

    const input = screen.getByTestId("home-input")
    fireEvent.change(input, { target: { value: 'thiagorocha' } })

    expect(input.value).toBe("thiagorocha")
  })
})
