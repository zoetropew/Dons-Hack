import { StyleSheet,Button } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}>Upload</Text>
      <Text style={styles.text}>Assignment</Text>
      </View>
      <View style={styles.textBox}> 
        <Text style={styles.text}></Text>
        </View>
      <View style={styles.sBox}>
    <Button
    title = "Submit"
    color="white"/>
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
