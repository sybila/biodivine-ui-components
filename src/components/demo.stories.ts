// Same here... the story is useless, but we can use it to make sure everything is working as it should.

import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { expect } from 'storybook/test';
import { MyLabel } from './demo';

const meta = {
  title: 'Demo',
  component: 'my-label',
} satisfies Meta<typeof MyLabel>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  name: 'Demo story',
};

export const Test: StoryObj<typeof meta> = {
  name: 'Simple test',
  play: async ({ userEvent }) => {
    await userEvent.keyboard('abc'); // User is typing something mindlessly.
    const body = document.querySelector('body')!;
    // This should intentionally fail to make sure CI is working correctly.
    await expect(body).toBeDisabled();
  },
};
