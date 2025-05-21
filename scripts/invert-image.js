const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/brands/bobo logos.png');
const outputPath = path.join(__dirname, '../public/images/brands/bobo logos white.png');

async function invertImage() {
  try {
    await sharp(inputPath)
      .negate() // This inverts the colors
      .toFile(outputPath);
    console.log('Image inverted successfully!');
  } catch (error) {
    console.error('Error inverting image:', error);
  }
}

invertImage(); 