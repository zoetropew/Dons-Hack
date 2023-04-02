// Reads output.json to store note and index


export function readNote(title, data) {
    var map = new Map();
    var note = "";

    // console.log(typeof(data));
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
        let string = obj.DetectedText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        temp.add(string);
        map.set(title, temp);
      }
    });
    // console.log(note);
    // console.log("printing map...");
    // map.forEach(function (value, key) {
    //   console.log("Key: " + key);
    //   console.log("value: ");

    //   for(var item of value.values()){
    //     console.log(item);
    //   }
    // })
    return note;
}