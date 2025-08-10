import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function App() {
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
