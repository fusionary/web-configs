import type { StorybookConfig } from '@storybook/nextjs-vite'

export const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],
  docs: {},
  framework: {
    name: '@storybook/nextjs-vite',
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
export { type StorybookConfig } from '@storybook/nextjs-vite'
