// Reads output.json to store note and index

import fs from 'fs';
import TreeMap from 'treemap-js';
import { removeCommonWords } from './Filter.mjs';
import { queryEval } from './searchFile.mjs';
var map = new TreeMap();
var note = "";

export function readNote(title) {
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
          else if (obj.Type == "WORD") {
            let temp = map.get(title);
            if (temp == null) {
                temp = new Set();
            }
            temp.add(obj.DetectedText);
            map.set(title, temp);
          }
        });
        console.log(note);

        console.log("printing map...");
        map.each(function (value, key) {
          console.log("Key: " + key);
          console.log("value: ");
          removeCommonWords(value);
          for(var item of value.values()){
            console.log(item);
          }
        })

        return note;
    });
}

var query = new Set(["Wednesday", "all", "photo", "editor", "project", "due", "Conferences","morning", "There", "will", "be", "severe", "late", "penalties", "orange"]);
readNote("something");
queryEval(query, map);