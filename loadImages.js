// src/loadImages.js
const images = require.context('./assets/imgs', false, /\.(png|jpe?g|gif|svg)$/);
const imagePaths = {};

images.keys().forEach((item) => {
  const imageName = item.replace('./', '');
  imagePaths[imageName] = images(item);
});

export default imagePaths;
