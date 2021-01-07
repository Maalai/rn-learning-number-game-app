import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
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
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 20
    }
});

export default GameOverScreen;