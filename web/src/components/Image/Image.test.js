import { render, cleanup } from '@redwoodjs/testing'

import Image from './Image'

describe('Image', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Image />)
    }).not.toThrow()
  })
})
