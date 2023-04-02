import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tbox}>
      <Text style={styles.title}>Search Results</Text>
      </View>
    <View style={styles.cbox}>
    <Button
    title = "4/21 Note"
    color="black"/>
    </View>  
    <View style={styles.cbox}>
    <Button
    title = "3/21 Note"
    color="black"/>
    </View> 
    <View style={styles.cbox}>
    <Button
    title = "2/21 Note"
    color="black"/>
    </View> 
    <View style={styles.cbox}>
    <Button
    title = "1/21 Note"
    color="black"/>
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
    marginLeft: 20,
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
    marginLeft: -5,
    width: 330,
    height: 65,
    backgroundColor: '#C7F2F4',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 40,
  },
});

