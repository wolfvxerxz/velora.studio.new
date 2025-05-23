const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'landing pages');
const outputDir = path.join(__dirname, 'public', 'landing pages');

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.png') || file.endsWith('.jpg')) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(png|jpg)$/, '.webp'));

    sharp(inputPath)
      .toFile(outputPath)
      .then(() => console.log(`Converted ${file} to WebP`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
}); 