/**
 * Draft of data structure to hold all notes
 */

import Note from './Note.mjs';

export default class noteList {
    constructor(){
        this.notesList = new Set();
        this.map = new Map();
    }

    addNote(title, data) {
        notesList.add(new Note(title, data));
    }

    getNote(note) {
        this.forEach(element => {
            if (element.title == note) {
                element.printMap();
            }
        });
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

    size() {
        return this.notesList.size();
    }
}

// const allNotes = new noteList();