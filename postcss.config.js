module.exports = {
    map: false,
    plugins: {
      '@fullhuman/postcss-purgecss': {
        content: ['./themes/**/*.html', './themes/**/*.js', './themes/liva-hugo/assets/plugins/themify-icons/themify-icons.css'],
        fontFace: true,
        keyframes: true,
        variables: true
      },
    },
    cssnano: {preset: 'advanced'}
  };
