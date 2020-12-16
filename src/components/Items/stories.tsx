import { Story, Meta } from '@storybook/react/types-6-0'
import Items from '.'

export default {
  title: 'Items',
  component: Items
} as Meta

export const Default: Story = () => <Items />
