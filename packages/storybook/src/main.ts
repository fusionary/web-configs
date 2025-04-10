import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

export const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-designs',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
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
