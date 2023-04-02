import { StyleSheet,Button, TextInput, Alert, Keyboard } from 'react-native';
import React from 'react';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { removeCommonWords } from '../../backend/Filter.mjs';
import { readNote, readNoteSet } from '../../backend/noteStorer.mjs';
import { queryEval } from '../../backend/searchFile.mjs';

export default function AssignmentScreen() {

  const jsonData1 = require('../../backend/astrophysics.json');
  let text1 = JSON.stringify(jsonData1);
  let astrophysicsNote = readNote("4/21 Note", text1);
  let astrophysics = readNoteSet(text1);

  const jsonData2 = require('../../backend/cs.json');
  let text2 = JSON.stringify(jsonData2);
  let csNote = readNote("3/21 Note", text2);
  let cs = readNoteSet(text2);

  const jsonData3 = require('../../backend/energy.json');
  let text3 = JSON.stringify(jsonData3);
  let energyNote = readNote("2/21 Note", text3);
  let energy = readNoteSet(text3);

  const jsonData4 = require('../../backend/ds.json');
  let text4 = JSON.stringify(jsonData4);
  let dsNote = readNote("1/21 Note", text4);
  let ds = readNoteSet(text4);

  const jsonData5 = require('../../backend/relativity.json');
  let text5 = JSON.stringify(jsonData5);
  let relativityNote = readNote("12/21 Note", text5);
  let relativity = readNoteSet(text5);

  let map = new Map();
  map.set("4/21 Note", astrophysics);
  map.set("3/21 Note", cs);
  map.set("2/21 Note", energy);
  map.set("1/21 Note", ds);
  map.set("12/21 Note", relativity);

  let noteMap = new Map();
  noteMap.set("4/21 Note", astrophysicsNote);
  noteMap.set("3/21 Note", csNote);
  noteMap.set("2/21 Note", energyNote);
  noteMap.set("1/21 Note", dsNote);
  noteMap.set("12/21 Note", relativityNote);


  const [textInputValue, setTextInputValue] = React.useState('');

  const handleTextInputChange = (text: string) => {
    setTextInputValue(text);
  };

  const handleSubmit = () => {
    console.log(textInputValue);
    let queries = new Set(textInputValue.split(" "));
    console.log(queries);
    queries = removeCommonWords(queries);
    console.log("newer: ");
    console.log(queries);
    let results = queryEval(queries, map);
    console.log(results);
    let finalset = new Set();
    results.forEach(function (value, key) {
      if (value > 0) {
        finalset.add(key);
      }
    });
    if(finalset.size > 0) {
      let toShow = "";
      for (let value of finalset) {
        toShow += "=================\n" + value + ":\n";
        toShow += noteMap.get(value);
      }
      Alert.alert("Your relevant notes:\n" + toShow);
    } else {
      Alert.alert("Please enter an assignment to search for relevant notes.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}>Upload</Text>
      <Text style={styles.text}>Assignment</Text>
      </View>
      <View style={styles.textBox}>
        <TextInput
          multiline
          returnKeyType="done"
          style={styles.input}
          onChangeText={handleTextInputChange}
          value={textInputValue}
          placeholder='Paste your assignment here!'
          placeholderTextColor="#b09bc9"
          onSubmitEditing={() => {
            Keyboard.dismiss();
            handleTextInputChange
            handleSubmit;
          }}
          // onSubmitEditing={handleSubmit}
          blurOnSubmit={true}
        />
        </View>
      <View style={styles.sBox}>
      <Button 
        title="Submit" 
        onPress={handleSubmit} 
        color="white"
        />
    </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  box: {
    marginLeft: -15,
    width: 300,
    height: 135,
    backgroundColor: '#EEFF92',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  textBox: {
    marginTop: 40,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    marginLeft:0,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    height: 300,
    width: 300,
    alignItems: 'flex-start',
  },
  text: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 30,
    fontSize: 30,
    fontWeight: 'normal',
    color: 'black',
  },
  input: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 30,
    fontSize: 14,
    fontWeight: 'normal',
    color: 'black',
  },
  sBox: {
    backgroundColor: '#8783F1',
    width: 123,
    height: 39,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    textAlign: 'center',
    marginBottom: 1,
  },
});
