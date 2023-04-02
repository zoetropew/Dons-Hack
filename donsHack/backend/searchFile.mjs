//Take in a query and data structure with note name and note contents
//return search results 

export function queryEval(query, map) { //Query should be a set/object containing assignment details
    var results = new Map();
    let count = 0;
    console.log("made it into query: " + query);
    map.forEach(function (value, key) {
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
    results.forEach(function(value, key) {
        console.log(key +": "+ value);
    })

    return results;
}