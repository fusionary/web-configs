import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

export const config: StorybookConfig = {
  addons: [
    /* eslint-disable unicorn/prefer-module */
    require.resolve('@storybook/addon-a11y'),
    require.resolve('@storybook/addon-links'),
    require.resolve('@storybook/addon-designs'),
    require.resolve('@storybook/addon-essentials'),
    require.resolve('@storybook/addon-onboarding'),
    require.resolve('@storybook/addon-interactions'),
    require.resolve('@storybook/addon-viewport'),
    /* eslint-enable unicorn/prefer-module */
  ],
  docs: {},
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {
      builder: {},
    },
  },
  stories: [
    '../../../packages/*/src/**/*.mdx',
    '../../../packages/*/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

export default config

// eslint-disable-next-line import/named
export { type StorybookConfig } from '@storybook/experimental-nextjs-vite'
