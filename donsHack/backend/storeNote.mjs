// Reads output.json to store note and index

import fs from 'fs';
import TreeMap from 'treemap-js';

var map = new TreeMap();
var note = "";

fs.readFile('./output.json', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    const jsonData = JSON.parse(data);
    jsonData.TextDetections.forEach((obj) => {
      if (obj.Type == "LINE") {
        note += obj.DetectedText + "\n";
      }
    });
    console.log(note);
  });

  