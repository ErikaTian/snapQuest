import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

const UploadScreen = () => {
  const [image, setImage] = useState("");
  const [labels, setLabels] = useState([]);


  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      analyzeImage(result.assets[0].uri);
      setImage(result.assets[0].uri);
      
    }
  };

  const showAlert = (message: string) => {
    Alert.alert(
      'Notification',
      message,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };


  const analyzeImage = async (uri : string) => {
    try {
      if (!uri) {
        alert('Please select an image first.');
        return;
      }

      // Replace 'YOUR_GOOGLE_CLOUD_VISION_API_KEY' with your actual API key
      const apiKey = 'AIzaSyArdWiO-dwBt7ouuOGUJCJ9CmkN8R8z_FE';
      const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

      // Read the image file from local URI and convert it to base64
      const base64ImageData = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const requestData = {
        requests: [
          {
            image: {
              content: base64ImageData,
            },
            features: [{ type: 'LABEL_DETECTION', maxResults: 10 }],
          },
        ],
      };

      const apiResponse = await axios.post(apiUrl, requestData);

      setLabels(apiResponse.data.responses[0].labelAnnotations);
      const variableString = ['green', 'apple', 'square']; 
      const hasMatch = parseResponse(apiResponse.data.responses[0], variableString);
      if (hasMatch) {
        showAlert("Success!");
      } else {
        showAlert("Hmm, that doesnt seem correct. Try again");
      }
    } catch (error) {
      console.error('Error analyzing image:', error);
      alert('Error analyzing image. Please try again later.');
    }
  };

  const parseResponse = (response: any, variableString: string[]) => {
    if (!response || !response.labelAnnotations || !variableString) {
      return false;
    }
  
    for (const annotation of response.labelAnnotations) {
      console.log(annotation);
      if (variableString.includes(annotation.description)) {
        return true;
      }
    }
  
    return false;
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.uploadContainer}>
        <Text style={styles.title}>Daily Photo Upload</Text>
        <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Tap to upload photo from camera</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.previewImage} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  uploadContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#e7e7e7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  uploadButtonText: {
    fontSize: 16,
    color: '#4a4a4a',
  },
  previewImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default UploadScreen;
