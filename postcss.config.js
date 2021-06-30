module.exports = {
  map: false,
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./themes/**/*.html', './themes/liva-hugo/assets/plugins/bootstrap/**/*.js', './themes/liva-hugo/assets/js/**/*.js', './themes/liva-hugo/assets/plugins/darkmode/darkmode.1.5.7.min.js'],
      css: ['./themes/**/*.css'],
      safelist: ['blockquote', 'ti-email', 'ti-github', 'ti-linkedin'],
      fontFace: true,
      keyframes: true,
      variables: true
    },
  },
  cssnano: { preset: 'advanced' }
};
