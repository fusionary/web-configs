import path from 'node:path'
import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

const getAbsolutePath = (packageName: string): string =>
  // eslint-disable-next-line unicorn/prefer-module
  path.dirname(require.resolve(path.join(packageName, 'package.json')))

export const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-designs'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-viewport'),
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
