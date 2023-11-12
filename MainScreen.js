import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Image, Button } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation'; // Corrected the import


export default function MainScreen() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const overlayAnim = new Animated.Value(-1000); // start off the screen

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  useEffect(() => {
    if (overlayVisible) {
      Animated.spring(overlayAnim, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(overlayAnim, {
        toValue: -1000,
        useNativeDriver: false,
      }).start();
    }
  }, [overlayVisible]);

  return (
    <View style={styles.container}>
        <Text style={styles.selectionText}>Select Your Performance</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.imageButton}>
                {/* Replace with your image */}
                <Image source={require('./Assets/WickedPoster.jpg')} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton}>
                {/* Replace with your image */}
                <Image source={require('./Assets/LionKingPoster.jpg')} style={styles.image} />
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.circleButton} onPress={() => setOverlayVisible(!overlayVisible)}>
            <View style={styles.innerCircle}></View>
        </TouchableOpacity>

        {overlayVisible && (
            <Animated.View style={[styles.overlay, { top: overlayAnim }]}>
                <View style={styles.overlayButton}>
                    <Button title="Profile" onPress={() => console.log('Profile pressed')} />
                </View>
                <View style={styles.overlayButton}>
                    <Button title="Preferences" onPress={() => console.log('Preferences pressed')} />
                </View>
            </Animated.View>
        )}
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayButton: {
    margin: 10,
    padding: 20,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'black',
    \width: '20%',
    alignItems: 'center',  // this is to center the button's text inside the styled view
    },
  circleButton: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  selectionContainer: {
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1, 
  },
  selectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageButton: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

