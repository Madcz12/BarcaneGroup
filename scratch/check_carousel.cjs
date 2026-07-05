const fs = require('fs');
const path = require('path');

const dirPath = 'c:\\Users\\DIAMOND\\Documents\\PROJECTS\\barcanegroup\\public\\images\\carrousel';

try {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    if (file.endsWith('.webp')) {
      const filePath = path.join(dirPath, file);
      const buffer = fs.readFileSync(filePath);
      const riff = buffer.toString('ascii', 0, 4);
      const webp = buffer.toString('ascii', 8, 12);
      if (riff !== 'RIFF' || webp !== 'WEBP') {
        console.log(`${file}: Not a valid WebP`);
        return;
      }
      
      let offset = 12;
      let found = false;
      while (offset < buffer.length - 8) {
        const chunkName = buffer.toString('ascii', offset, offset + 4);
        const chunkSize = buffer.readUInt32LE(offset + 4);
        if (chunkName === 'VP8X') {
          const width = buffer.readUIntLE(offset + 8 + 4, 3) + 1;
          const height = buffer.readUIntLE(offset + 8 + 7, 3) + 1;
          console.log(`${file}: ${width}x${height} (VP8X)`);
          found = true;
          break;
        } else if (chunkName === 'VP8 ') {
          const width = buffer.readUInt16LE(offset + 8 + 6) & 0x3fff;
          const height = buffer.readUInt16LE(offset + 8 + 8) & 0x3fff;
          console.log(`${file}: ${width}x${height} (VP8 Lossy)`);
          found = true;
          break;
        } else if (chunkName === 'VP8L') {
          const val = buffer.readUInt32LE(offset + 8 + 1);
          const width = (val & 0x3FFF) + 1;
          const height = ((val >> 14) & 0x3FFF) + 1;
          console.log(`${file}: ${width}x${height} (VP8L Lossless)`);
          found = true;
          break;
        }
        offset += 8 + chunkSize + (chunkSize % 2);
      }
      if (!found) {
        console.log(`${file}: Unknown chunk header`);
      }
    }
  });
} catch (err) {
  console.error('Error reading directory:', err);
}
