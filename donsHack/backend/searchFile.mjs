import TreeMap from 'treemap-js';

//Take in a query and data structure with note name and note contents
//return search results 

//example of assignment details

// var query = new Set(["Collaborative", "a", "all", "photo", "editor", "project", "due", "tomorrow","morning", "There", "will", "be", "severe", "late", "penalties", "orange"]);

// var note1Set = new Set(["Students", "you", "must", "read", "all", "materials", "project", "tomorrow"]);

// var note2Set = new Set(["editor", "due", "quick", "query"]);

// var map = new TreeMap();



// map.set('note 1', note1Set);
// map.set('note 2', note2Set);
function queryEval(query, map) { //Query should be a set/object containing assignment details
    var results = new TreeMap();
    let count = 0;
    console.log("made it into query: " + query);
    map.each(function (value, key) {
        console.log(key);
        for(var item of value.values()){
            for (let word of query) {
                if(word.toLowerCase() === item) {
                    console.log("matching word: " + word);
                    count++;
                }
            }
          }
        results.set(key, count);
        console.log(key + " "+count);
        count = 0;
    })
    results.each(function(value, key) {
        console.log(key +": "+ value);
    })

    return results;
}


// queryEval(query, map);

export { queryEval };