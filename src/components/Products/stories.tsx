import { Story, Meta } from '@storybook/react/types-6-0'
import Products from '.'

export default {
  title: 'Products',
  component: Products
} as Meta

export const Default: Story = () => <Products />
