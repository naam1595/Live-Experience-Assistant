import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function TutorialScreen({ onBack, onSkip }) {
    const { language } = useContext(LanguageContext);
    return (
        <View style={styles.container}>
            <View style={styles.gifContainer}>
                <Image 
                    source={require('./Assets/Tuto.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onBack}>
                    <Text style={styles.buttonText}>{language === 'english' ? "Back" : "Regresar"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onSkip}>
                    <Text style={styles.buttonText}>{language === 'english' ? "Skip" : "Ignorar"}</Text>
                </TouchableOpacity>
            </View>
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
    gifContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: '60%', // Adjust width as required
        height: '60%', // Adjust height as required
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 30,
    },
    button: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});
