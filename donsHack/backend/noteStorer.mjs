/**
 * Reads output.json to store individual notes as strings of text and as sets of key words from the text
 */


/**
 * Reads the note as a string
 * 
 * @param {String} title the title of the note
 * @param {JSON String} data the data from the image
 * @returns the note as a string
 */
export function readNote(title, data) {
    var note = "";
    const jsonData = JSON.parse(data);
    jsonData.TextDetections.forEach((obj) => {
    if (obj.Type == "LINE") {
        note += obj.DetectedText + "\n";
    }
    });
    console.log(note);
    return note;
}

/**
 * Reads the note as a Map of String title to a Set of words
 * 
 * @param {String} title the title of the note
 * @param {JSON String} data the data from the image
 * @returns the note as a Map of String title to a Set of words
 */
export function readNoteMap(title, data) {
  var map = new Map();
  const jsonData = JSON.parse(data);
  jsonData.TextDetections.forEach((obj) => {
    if (obj.Type == "WORD") {
      let temp = map.get(title);
      if (temp == null) {
        temp = new Set();
      }
      let string = obj.DetectedText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      temp.add(string);
      map.set(title, temp);
    }
  });
  console.log("printing map...");
  map.forEach(function (value, key) {
    console.log("Key: " + key);
    console.log("value: ");

    for(var item of value.values()){
      console.log(item);
    }
  });
  return map;
}

/**
 * Reads the note as a Set of words
 * 
 * @param {JSON String} data the data from the image
 * @returns the Set of words in the note, cleaned and lowercased
 */
export function readNoteSet(data) {
  var set = new Set();
  const jsonData = JSON.parse(data);
  jsonData.TextDetections.forEach((obj) => {
    if (obj.Type == "WORD") {
      let string = obj.DetectedText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      set.add(string);
    }
  });
  return set;
}