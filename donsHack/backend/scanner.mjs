/**
 * Takes image url input, calls API to scan for text, stores data in an output.json file
 */

import axios from 'axios';
import fs from 'fs';

// PLEASE USE SPARINGLY: I only have 100 free API calls and I already used 30 of them lol
// to access test data read from whiteboard.jpeg, use output.json which was generated from the last API call

/**
 * Images that were read are stored in the testData folder
 * 
 * Test data files generated from those images are in this directory under the following names:
 *    astrophysics.json
 *    cs.json
 *    ds.json
 *    energy.json
 *    output.json
 *    relativity.json
 */

const key = fs.readFileSync('./key.json');

const options = {
  method: 'POST',
  url: 'https://text-in-images-recognition.p.rapidapi.com/prod',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'text-in-images-recognition.p.rapidapi.com'
  },
  // Example
  // data: '{"objectUrl":"https://miro.medium.com/max/2400/1*T8LN_mDq8vNrD63IIIgzjQ.png"}'
  
  // Testing handwriting source data
  data: '{"objectUrl":"https://raw.githubusercontent.com/zoetropew/Dons-Hack/main/donsHack/backend/testData/whiteboard.jpeg"}'
};

/**
 * Writes the image data to a file so repeated API calls can be avoided during testing
 */
axios.request(options).then(function (response) {
  fs.writeFile('output.json', JSON.stringify(response.data), function (err) {
    if (err) throw err;
    console.log('Response data saved to output.json');
  });
}).catch(function (error) {
	console.error(error);
});