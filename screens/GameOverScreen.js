import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import DefaultStyles from '../constants/DefaultStyles';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
    const { numRounds, userNumber, onRestartGame } = props;

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>The Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover'/>
            </View>
            <View style={styles.resultContainer}>
            <Text style={DefaultStyles.bodyText}>Your phone needed <Text style={styles.highlight}>{numRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            </View>
            <MainButton onPress={onRestartGame}>
                NEW GAME
            </MainButton>
            </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: Dimensions.get('window').height / 60
    }
});

export default GameOverScreen;