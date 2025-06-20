import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'

export const preview: Preview = {
  parameters: {
    a11y: {
      config: {
        rules: [{ id: 'duplicate-id', selector: '*:not(#storybook-root)' }],
      },
      element: '#storybook-root',
    },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        date: /date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        galaxyFold: {
          name: 'Galaxy Fold',
          styles: {
            height: '653px',
            width: '280px',
          },
          type: 'mobile',
        },
        pixel6: {
          name: 'Pixel 6',
          styles: {
            height: '915px',
            width: '412px',
          },
          type: 'mobile',
        },
        pixel6Pro: {
          name: 'Pixel 6 Pro',
          styles: {
            height: '892px',
            width: '412px',
          },
          type: 'mobile',
        },
      },
    },
  },
}

export default preview

export type { Preview } from '@storybook/react'
