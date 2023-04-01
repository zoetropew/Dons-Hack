import axios from 'axios';
// import fs from 'fs';

// API can receive either URL of an image or a base64-encoded string of image data
// Acceptable file formats: JPEG, PNG, BMP, TIFF, GIF

// Trying base64:
// const image = fs.readFileSync('./hand.png');
// const encodedImage = Buffer.from(image).toString('base64');

const options = {
  method: 'POST',
  url: 'https://text-in-images-recognition.p.rapidapi.com/prod',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '8a747041b9mshc6017c4b82c1f35p1735cbjsn8c26a1d30b32',
    'X-RapidAPI-Host': 'text-in-images-recognition.p.rapidapi.com'
  },
  // Testing:
  data: '{"objectUrl":"https://i.redd.it/bylc39jdqbmz.jpg"}'

  // Example:
  // data: '{"objectUrl":"https://miro.medium.com/max/2400/1*T8LN_mDq8vNrD63IIIgzjQ.png"}'

  // Trying base 64:
  // data: {
  //   base64Image: encodedImage
  // }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

console.log("Node file is running and working");