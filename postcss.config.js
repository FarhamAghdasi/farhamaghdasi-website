const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
