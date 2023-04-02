// Reads output.json to store note and index


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