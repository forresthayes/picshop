import { render, cleanup } from '@redwoodjs/testing'

import CartItem from './CartItem'

describe('CartItem', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CartItem />)
    }).not.toThrow()
  })
})
