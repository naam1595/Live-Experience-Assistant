import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default function WelcomeScreen({ onFinish }) {
  const [animationPhase, setAnimationPhase] = useState(0);
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(1);

  useEffect(() => {
    if (animationPhase < 3) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(500),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setAnimationPhase(animationPhase + 1);
        fadeAnim.setValue(0);
      });
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 2,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start(onFinish);
    }
  }, [animationPhase, fadeAnim, scaleAnim, onFinish]);

  const renderText = () => {
    switch (animationPhase) {
      case 0:
        return 'Live';
      case 1:
        return 'Experience';
      case 2:
        return 'Assistant';
      default:
        return 'LEA';
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
        {renderText()}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
