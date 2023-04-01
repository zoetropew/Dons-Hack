import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://text-in-images-recognition.p.rapidapi.com/prod',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '8a747041b9mshc6017c4b82c1f35p1735cbjsn8c26a1d30b32',
    'X-RapidAPI-Host': 'text-in-images-recognition.p.rapidapi.com'
  },
  // Example
  // data: '{"objectUrl":"https://miro.medium.com/max/2400/1*T8LN_mDq8vNrD63IIIgzjQ.png"}'
  
  // Testing handwriting source data
  data: '{"objectUrl":"https://external-preview.redd.it/qfdH8H38j1lV3nGUwfGmKhME_JgwIzKo-0woTuWLdy4.jpg?auto=webp&v=enabled&s=e597a56867b5c3dbff77a2b349d055bdcf1458af"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

console.log("Node file is running and working");