import { StyleSheet, Button, Alert } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { readNote } from '../../backend/noteStorer.mjs';

  export default function NotesScreen() {
  let view = "Documents";

  const jsonData1 = require('../../backend/astrophysics.json');
  let text1 = JSON.stringify(jsonData1);
  let astrophysics = readNote("4/21 Note", text1);

  const jsonData2 = require('../../backend/cs.json');
  let text2 = JSON.stringify(jsonData2);
  let cs = readNote("3/21 Note", text2);

  const jsonData3 = require('../../backend/energy.json');
  let text3 = JSON.stringify(jsonData3);
  let energy = readNote("2/21 Note", text3);

  const jsonData4 = require('../../backend/ds.json');
  let text4 = JSON.stringify(jsonData4);
  let ds = readNote("1/21 Note", text4);

  const jsonData5 = require('../../backend/relativity.json');
  let text5 = JSON.stringify(jsonData5);
  let relativity = readNote("12/21 Note", text5);

  return (
    <View style={styles.container}>
      <View style={styles.tbox}>
      <Text style={styles.title}>{view}</Text>
      </View>
    <View style={styles.cbox}>
    <Button
    title = "4/21 Note"
    color="black"
    onPress={() => Alert.alert(astrophysics)}
    />
    </View>  
    <View style={styles.cbox}>
    <Button
    title = "3/21 Note"
    color="black"
    onPress={() => Alert.alert(cs)}
    />
    </View> 
    <View style={styles.cbox}>
    <Button
    title = "2/21 Note"
    color="black"
    onPress={() => Alert.alert(energy)}
    />
    </View> 
    <View style={styles.cbox}>
    <Button
    title = "1/21 Note"
    color="black"
    onPress={() => Alert.alert(ds)}
    />
    </View> 
    <View style={styles.cbox}>
    <Button
    title = "12/21 Note"
    color="black"
    onPress={() => Alert.alert(relativity)}
    />
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  title:{
    marginTop: 15,
    marginLeft: 40,
    marginRight: 30,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 30,
    fontSize: 40,
    fontWeight: 'normal',
    color: 'black',
  },
  tbox: {
    marginTop:20,
    marginLeft: -5,
    width: 250,
    height: 70,
    backgroundColor: '#8783F1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  cbox: {
    // marginLeft: -5,
    width: 330,
    height: 65,
    backgroundColor: '#C7F2F4',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 40,
  },
});


