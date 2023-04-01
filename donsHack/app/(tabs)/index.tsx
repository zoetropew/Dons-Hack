import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>WriteBoard.</Text>
      <View style={styles.textBox}> 
        <Text style={styles.text}>How to use: Tap the icon to begin converting your white board captures to text
        {'\n'}{'\n'}{'\n'} If you’d like to view previous entries, tap the icon 
        {'\n'}{'\n'}{'\n'}Tap the icon to search and find your class notes.
        {'\n'}{'\n'}{'\n'} Tap the icon to navigate back to home page</Text>
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
    marginLeft: -15,
    width: 300,
    height: 135,
    backgroundColor: '#8783F1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  title: {
    marginLeft: 25,
    marginTop: 70,
    fontSize: 50,
    fontWeight: 'normal',
    color: 'white',
  },
  text: {
    fontWeight: 'normal',
    color: 'black',
  },
  textBox: {
    marginTop: 70,
    borderWidth: 3,
    borderColor: '#8783F1',
    marginLeft:45,
    backgroundColor: 'white',
    height: 400,
    width: 350,
    alignItems: 'flex-start',
  },
});
