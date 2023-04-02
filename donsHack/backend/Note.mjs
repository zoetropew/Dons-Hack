/**
 * Draft of Note class to store individual notes
 */

// import RNFS from 'react-native-fs';
import { readNote } from './noteStorer.mjs';

export default class Note {
    constructor(title, data){
    //   this.map = new Map();
      this.title = title;
      this.note, this.map = readNote(title, data);
      this.queries = new Set();
      this.results = new Map();
    }
  
    getNote(){
      return this.note;
    }

    printMap(){
        console.log(this.note);
        console.log("printing map...");
        this.map.forEach(function (value, key) {
        console.log("Key: " + key);
        console.log("value: ");

        for(var item of value.values()){
            console.log(item);
        }
        })
    }
  }

// const newNote = new Note();
// newNote.makeNote("this is the new note");
// newNote.makeNote("something", './output.json');