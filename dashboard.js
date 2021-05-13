import React, {Component, useState} from 'react';
// Import required components
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, Platform, PermissionsAndroid, Button} from 'react-native';
import axios from 'axios';

import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';

// class Dashboard extends Component {

//   render() {
//     return(
//       <View>
//       </View>
//     );
//   }
// }

const Dashboard = () => {
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        // console.log('Response = ', response);
        var image = response;
        //console.log(image)
        var data = new FormData();
        data.append('image', {
          name: 'image',
          type: 'image/jpeg',
          uri:
            Platform.OS === 'android'
              ? response.uri
              : response.uri.replace('content://', ''),
        });
        axios({
          method: 'POST',
          url: '  http://14655d7537de.ngrok.io/predict',
          data: data,
        })
          .then((response) => {
            alert(response.data);
          })
          .catch((error) => {
            console.log("Error:", error);
          });

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  // const imageAPICall = (image) => {
  //   console.log("Lololololol");
  //   var data = new FormData();
  //   data.append('image', {
  //     name: 'image',
  //     type: 'image/jpeg',
  //     uri:
  //       Platform.OS === 'android'
  //         ? image.path
  //         : image.path.replace('file://', ''),
  //   });
  //   axios({
  //     method: 'post',
  //     url: 'https://52c571aacfe2.ngrok.io/predict',
  //     data: data,
  //   })
  //     .then((response) => {
  //       console.log('Response from server:', response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);
      var image = response;
        //console.log(image)
        var data = new FormData();
        data.append('image', {
          name: 'image',
          type: 'image/jpeg',
          uri:
            Platform.OS === 'android'
              ? response.uri
              : response.uri.replace('content://', ''),
        });
        axios({
          method: 'POST',
          url: ' http://14655d7537de.ngrok.io/predict',
          data: data,
        })
          .then((response) => {
            alert(response.data);
          })
          .catch((error) => {
            console.log("Error:", error);
          });

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>Step 1: Take a photo or select a photo</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>Click Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Step 2: Preveiw of an image</Text>
        <Image
          source={{uri: filePath.uri}}
          style={styles.imageStyle}
        />        
        {/* <Text>Location={{uri: filePath.uri}}</Text> */}
        <Text style={styles.text}>Step 3: You will get an alert showing the analysis of our system</Text>
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          // onPress={() => chooseFile('photo')}
          >
          <Text style={styles.textStyle}>Check for TB</Text>
        </TouchableOpacity> */}
        
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  text: {
    padding: 10,
    color: '#0000CD',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
  },
  textStyle: {
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontSize: 17
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#000080',
    padding: 6,
    marginVertical: 10,
    width: 220
  },
  imageStyle: {
    width: 350,
    height: 250,
    margin: 5,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
});