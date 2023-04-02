import { Platform, StyleSheet, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
    <Button
    title = "All Notes"
    color="black"/>
    </View>  
    <View style={styles.box1}>
      <Text style={styles.title}>4/21 Note</Text>
      </View>
      <View style={styles.box2}></View>  
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
    marginLeft: 20,
    marginRight: 30,
    fontSize: 28,
    color: 'black',
  },
  text: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 30,
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
  },
  box: {
    marginLeft: 10,
    width: 110,
    height: 40,
    backgroundColor: '#E9FF70',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 15,
    marginTop: 20,
  },
  box1: {
    marginLeft: 25,
    width: 350,
    height: 55,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  box2: {
    width: 400,
    height: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
  },
});