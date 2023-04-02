import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={[
          styles.trapazoid,
          {
            transform: [{rotate: '125deg'}],
          },
        ]}></View>
      <View style={[
          styles.trapazoid2,
          {
            transform: [{rotate: '45deg'}],
          },
        ]}></View>
      <View style={[
          styles.trapazoid3,
          {
            transform: [{rotate: '205deg'}],
          },
      ]}></View>
      <View style={styles.box}>
        <Text style={styles.title}>WriteBoard.</Text>
      <View style={styles.textBox}> 
        <Text style={styles.text}>How to use: 
        {'\n'}{'\n'}Tap the ICON icon to begin converting your white board captures to text
        {'\n'}{'\n'}{'\n'} If you’d like to view previous entries, tap the ICON icon 
        {'\n'}{'\n'}{'\n'}Tap the ICON icon to search and find your class notes.
        {'\n'}{'\n'}{'\n'} Tap the ICON icon to navigate back to home page</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  box: {
    marginLeft: -30,
    width: 300,
    height: 135,
    backgroundColor: '#8783F1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  title: {
    marginLeft: 35,
    marginTop: 50,
    fontSize: 50,
    fontWeight: 'normal',
    color: 'white',
  },
  text: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 30,
    fontSize: 17,
    fontWeight: 'normal',
    color: 'black',
  },
  textBox: {
    marginTop: 70,
    borderWidth: 3,
    borderColor: '#8783F1',
    marginLeft:45,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    height: 400,
    width: 350,
    alignItems: 'flex-start',
  },
  trapazoid: {
    marginTop: 200,
    marginLeft: 325,
    borderRadius: 30,
    position: 'absolute',
    backgroundColor: 'white',
    width: 300,
    height: 300,
    borderBottomWidth: 200,
    borderBottomColor: "#E9FF70",
    borderLeftWidth: 50,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderStyle: "solid",
  },
  trapazoid2: {
    marginBottom: '80%',
    marginRight: 400,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: 'white',
    width: 200,
    height: 200,
    borderBottomColor: "#E9FF70",
    borderLeftWidth: 50,
    borderLeftColor: "#E9FF70",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderStyle: "solid",
    borderBottomWidth: 300,
  },
  trapazoid3: {
    marginTop: 475,
    borderRadius: 30,
    position: 'absolute',
    backgroundColor: 'white',
    width: 500,
    height: 600,
    borderBottomWidth: 200,
    borderBottomColor: "#E9FF70",
    borderLeftWidth: 0,
    borderLeftColor: "transparent",
    borderRightWidth: 50,
    borderRightColor: "transparent",
    borderStyle: "solid",
  },
});
