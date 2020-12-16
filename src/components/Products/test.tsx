import { render, screen } from '@testing-library/react'

import Products from '.'

describe('<Products />', () => {
  it('should render the heading', () => {
    const { container } = render(<Products />)

    expect(screen.getByRole('heading', { name: /Products/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
