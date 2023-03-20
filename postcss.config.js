module.exports = {
  map: false,
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: [ './themes/absolute-array-amperage/**/*.html' ],
      css: [ './themes/absolute-array-amperage/**/*.css' ],
      safelist: [],
      fontFace: true,
      keyframes: true,
      variables: true
    },
  },
  cssnano: { preset: 'advanced' }
}
