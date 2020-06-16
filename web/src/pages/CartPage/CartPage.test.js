import { render, cleanup } from '@redwoodjs/testing'

import CartPage from './CartPage'

describe('CartPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CartPage />)
    }).not.toThrow()
  })
})
