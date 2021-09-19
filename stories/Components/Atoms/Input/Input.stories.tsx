import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input, { InputProps } from '../../../../components/atoms/Input';

export default {
  title: 'Component/Atoms/Input',
  component: Input,
} as ComponentMeta <typeof Input>;

// template sebuah story
const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Full Name',
};
