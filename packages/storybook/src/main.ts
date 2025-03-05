import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'

export const config: StorybookConfig = {
  addons: [
    import.meta.resolve('@storybook/addon-a11y'),
    import.meta.resolve('@storybook/addon-links'),
    import.meta.resolve('@storybook/addon-designs'),
    import.meta.resolve('@storybook/addon-essentials'),
    import.meta.resolve('@storybook/addon-onboarding'),
    import.meta.resolve('@storybook/addon-interactions'),
    import.meta.resolve('@storybook/addon-viewport'),
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
