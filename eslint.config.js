import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: true,
    unocss: true,
  },
  {
    rules: {
      'node/prefer-global/process': ['error', 'always'],
    },
  },
)
