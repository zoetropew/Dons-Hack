import { StyleSheet, Button, Alert, Platform } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function UploadScreen() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // setSelectedImage(result.uri);
      Alert.prompt(
        "Title of note: ",
        "",
        [
          {
            text: "enter",
            onPress: (title) => {
              console.log("Title of note: " + title);
              Alert.alert("Image scanned and uploaded");
            }
          }
        ]
      );      
    }
  };

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
      onPress={pickImage}
      />
    </View>
    <View style={styles.sBox}>
    <Button
    title = "Take Photos"
    color="black"
    onPress={() => Alert.alert("Camera option coming soon!")}
    />
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
