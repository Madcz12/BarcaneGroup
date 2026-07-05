const fs = require('fs');
const path = 'c:\\Users\\DIAMOND\\Documents\\PROJECTS\\barcanegroup\\public\\images\\items\\background_barcanegroup_rescaled_v1.webp';

try {
  const buffer = fs.readFileSync(path);
  const riff = buffer.toString('ascii', 0, 4);
  const webp = buffer.toString('ascii', 8, 12);
  if (riff !== 'RIFF' || webp !== 'WEBP') {
    console.log('Not a valid WebP file');
    process.exit(1);
  }

  const chunkHeader = buffer.toString('ascii', 12, 16);
  
  if (chunkHeader === 'VP8X') {
    const width = buffer.readUIntLE(24, 3) + 1;
    const height = buffer.readUIntLE(27, 3) + 1;
    console.log(`Dimensions: ${width}x${height} (VP8X)`);
  } else if (chunkHeader === 'VP8 ') {
    const width = buffer.readUInt16LE(26) & 0x3fff;
    const height = buffer.readUInt16LE(28) & 0x3fff;
    console.log(`Dimensions: ${width}x${height} (VP8 Lossy)`);
  } else if (chunkHeader === 'VP8L') {
    const val = buffer.readUInt32LE(21);
    const width = (val & 0x3FFF) + 1;
    const height = ((val >> 14) & 0x3FFF) + 1;
    console.log(`Dimensions: ${width}x${height} (VP8L Lossless)`);
  } else {
    let offset = 12;
    let found = false;
    while (offset < buffer.length - 8) {
      const chunkName = buffer.toString('ascii', offset, offset + 4);
      const chunkSize = buffer.readUInt32LE(offset + 4);
      if (chunkName === 'VP8X') {
        const width = buffer.readUIntLE(offset + 8 + 4, 3) + 1;
        const height = buffer.readUIntLE(offset + 8 + 7, 3) + 1;
        console.log(`Dimensions: ${width}x${height} (Scanned VP8X)`);
        found = true;
        break;
      } else if (chunkName === 'VP8 ') {
        // VP8 signature is at offset + 8 + 3: 0x9d 0x01 0x2a
        const width = buffer.readUInt16LE(offset + 8 + 6) & 0x3fff;
        const height = buffer.readUInt16LE(offset + 8 + 8) & 0x3fff;
        console.log(`Dimensions: ${width}x${height} (Scanned VP8 Lossy)`);
        found = true;
        break;
      } else if (chunkName === 'VP8L') {
        const val = buffer.readUInt32LE(offset + 8 + 1);
        const width = (val & 0x3FFF) + 1;
        const height = ((val >> 14) & 0x3FFF) + 1;
        console.log(`Dimensions: ${width}x${height} (Scanned VP8L Lossless)`);
        found = true;
        break;
      }
      offset += 8 + chunkSize + (chunkSize % 2);
    }
    if (!found) {
      console.log(`Could not automatically decode WebP dimensions. Chunk header is ${chunkHeader}. File size is ${buffer.length} bytes.`);
    }
  }
} catch (err) {
  console.error('Error reading file:', err);
}
