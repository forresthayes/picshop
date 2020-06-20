import { render, cleanup } from '@redwoodjs/testing'

import Icon from './Icon'

describe('Icon', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Icon />)
    }).not.toThrow()
  })
})
