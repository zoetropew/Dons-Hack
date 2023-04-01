import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.title}>WriteBoard.</Text>
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
});
