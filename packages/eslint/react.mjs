/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// @ts-expect-error - no types
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

import base from '@fusionary/eslint-config'

const $config = defineConfig(
  ...base,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: { react: { version: 'detect' } },
  },
  reactPlugin.configs.flat['jsx-runtime'] ?? {},
  reactCompiler.configs.recommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  jsxA11y.flatConfigs.recommended,
  {
    extends: ['react-hooks/recommended'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    name: 'React Hooks',
    plugins: {
      'react-hooks': reactHooks,
    },
  },
  {
    languageOptions: {
      ...reactPlugin.configs.flat.recommended?.languageOptions,
    },
    name: 'React',
    rules: {
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          depth: 3,
          labelAttributes: ['children'],
          labelComponents: ['FormLabel'],
        },
      ],

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-array-index-key': ['warn'],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': ['off'],
    },
    settings: {
      react: {
        version: '19',
      },
    },
  },
)

export default $config
