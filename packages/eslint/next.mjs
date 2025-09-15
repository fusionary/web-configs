import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig } from 'eslint/config'

import react from '@fusionary/eslint-config/react'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const $config = defineConfig(
  react,
  ...compat.config({
    extends: ['plugin:@next/next/recommended'],
  }),
)

export default $config
