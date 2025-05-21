const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');

// Function to convert image to WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Converted to WebP: ${outputPath}`);
  } catch (error) {
    console.error(`Error converting to WebP ${inputPath}:`, error);
  }
}

// Function to convert image to AVIF
async function convertToAVIF(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .avif({ quality: 60 })
      .toFile(outputPath);
    console.log(`Converted to AVIF: ${outputPath}`);
  } catch (error) {
    console.error(`Error converting to AVIF ${inputPath}:`, error);
  }
}

// Function to process all images in a directory recursively
async function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const webpPath = filePath.replace(ext, '.webp');
        const avifPath = filePath.replace(ext, '.avif');
        
        await convertToWebP(filePath, webpPath);
        await convertToAVIF(filePath, avifPath);
      }
    }
  }
}

// Convert the inverted bobo logos image
async function convertInvertedBoboLogos() {
  const inputPath = path.join(PUBLIC_DIR, 'images/brands/bobo logos white.png');
  const webpPath = inputPath.replace('.png', '.webp');
  const avifPath = inputPath.replace('.png', '.avif');
  
  await convertToWebP(inputPath, webpPath);
  await convertToAVIF(inputPath, avifPath);
}

// Start processing
console.log('Starting image conversion...');
processDirectory(PUBLIC_DIR)
  .then(() => {
    console.log('Converting inverted bobo logos...');
    return convertInvertedBoboLogos();
  })
  .then(() => console.log('Conversion completed!'))
  .catch(error => console.error('Error during conversion:', error)); 