module.exports = {
  map: false,
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./themes/**/*.html', './themes/**/*.js'],
      safelist: ['blockquote', 'ti-email', 'ti-github', 'ti-linkedin'],
      fontFace: true,
      keyframes: true,
      variables: true
    },
  },
  cssnano: { preset: 'advanced' }
};
