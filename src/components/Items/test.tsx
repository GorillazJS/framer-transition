import { render, screen } from '@testing-library/react'

import Items from '.'

describe('<Items />', () => {
  it('should render the heading', () => {
    const { container } = render(<Items />)

    expect(screen.getByRole('heading', { name: /Items/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
