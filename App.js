import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LanguageContext from './LanguageContext';
import LanguageSelectionScreen from './LanguageSelectionScreen';
import WelcomeScreen from './WelcomeScreen';
import TutorialScreen from './TutorialScreen';
import MainScreen from './MainScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [language, setLanguage] = useState('english'); // default to english

  const handleFinishWelcome = () => {
    setCurrentScreen('languageSelection');
  };

  const handleLanguageSelection = () => {
    setCurrentScreen('tutorial');
  };

  const handleBackToLanguageSelection = () => {
    setCurrentScreen('languageSelection');
  };

  const handleSkipToMain = () => {
    setCurrentScreen('main');
  };

  let renderedScreen;
  switch (currentScreen) {
    case 'welcome':
      renderedScreen = <WelcomeScreen onFinish={handleFinishWelcome} />;
      break;
    case 'languageSelection':
      renderedScreen = <LanguageSelectionScreen onSelectLanguage={handleLanguageSelection} />;
      break;
    case 'tutorial':
      renderedScreen = <TutorialScreen onBack={handleBackToLanguageSelection} onSkip={handleSkipToMain} />;
      break;
    case 'main':
      renderedScreen = <MainScreen />;
      break;
    default:
      renderedScreen = null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <View style={styles.container}>
        {renderedScreen}
      </View>
    </LanguageContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
