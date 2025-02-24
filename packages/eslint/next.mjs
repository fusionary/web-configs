import { FlatCompat } from '@eslint/eslintrc'

import react from '@fusionary/eslint-config/react'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const next = compat.config({
  extends: ['plugin:@next/next/recommended'],
})

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
const _default = [...react, ...next]

export default _default
