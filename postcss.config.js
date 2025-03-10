module.exports = {
  map: { inline: false, annotation: true }, // Enables external .map file
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    })
  ]
};

  