import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';



export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
    <View style={{backgroundColor: '#E9FF70', marginTop:10, width: 266, height: 110,borderRadius: 15}}>
      <View style={[styles.bBox,{marginLeft:15},{marginTop:-15}]}>
      <Text style={styles.text}>Let's get started</Text>
      </View>
    </View>
    </View>
    <View style={styles.sBox}>
      <Button 
      title = "Upload Images"
      color="black"
      />
    </View>
    <View style={styles.sBox}>
    <Button
    title = "Take Photos"
    color="black"/>
    </View>  
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bBox: {
    backgroundColor: '#8783F1',
    width: 266,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    textAlign: 'center',
    marginBottom: 90,
  },
  text:{
    fontSize: 31,
    color: 'white',
    paddingBottom: 10,
  },
  sBox: {
    backgroundColor: '#D2F5F6',
    width: 250,
    height: 65,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    textAlign: 'center',
    marginBottom: 1,
  },
});
