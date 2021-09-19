import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameItem, { GameItemProps } from '../../../../components/molecules/GameItem';

export default {
  title: 'Component/Molecules/GameItem',
  component: GameItem,
} as ComponentMeta <typeof GameItem>;

// template sebuah story
const Template: ComponentStory<typeof GameItem> = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: ' Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
