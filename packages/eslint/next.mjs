/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// @ts-expect-error - no types
import next from '@next/eslint-plugin-next'

import react from '@fusionary/eslint-config/react'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
const _default = [...react, next.configs.recommended]

export default _default
