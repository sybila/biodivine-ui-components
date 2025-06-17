import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    {
      name: '@storybook/addon-docs',
      options: {
        autodocs: true,
      },
    },
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
};

export default config;
