import { createRequire } from 'node:module'
import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

// eslint-disable-next-line unicorn/prefer-module
const req = createRequire(__dirname)

export const config: StorybookConfig = {
  addons: [
    req.resolve('@storybook/addon-a11y'),
    req.resolve('@storybook/addon-links'),
    req.resolve('@storybook/addon-designs'),
    req.resolve('@storybook/addon-essentials'),
    req.resolve('@storybook/addon-onboarding'),
    req.resolve('@storybook/addon-interactions'),
    req.resolve('@storybook/addon-viewport'),
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
