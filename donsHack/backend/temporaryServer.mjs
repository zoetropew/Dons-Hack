// TAKES IMAGE PATH AND SERVES IT TO LOCALHOST URL
// may be useful for solving api issue
// may not be lol

import fs from 'fs';
import mime from 'mime';

import express from 'express';
const app = express();

// Serve the image as a URL
app.get('/image', (req, res) => {
  const imagePath = './testData/hand.png';
  const imageMimeType = mime.getType(imagePath);

  // Set the response headers to indicate that we're returning an image
  res.setHeader('Content-Type', imageMimeType);
  res.setHeader('Content-Disposition', 'inline');

  // Read the image file and return it as a response
  const imageFileStream = fs.createReadStream(imagePath);
  imageFileStream.pipe(res);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

