import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Card from '../components/Card';
import NumberDialog from '../components/NumberDialog';
import DefaultStyles from '../constants/DefaultStyles';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";

const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if(randomNumber === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    }
    else {
        return randomNumber;
    }
};

const renderPastGuess = (value, roundNums) => {
    return (<View key={value} style={styles.listItem}>
        <Text>#{roundNums}</Text>
        <Text>{value}</Text>
    </View>);
}

const GameScreen = (props) => {
    const { userInput, onGameOver } = props;
    const initialGuess = generateRandomNumberBetween(1,100, userInput);
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === userInput) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userInput, onGameOver]);

    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < userInput) || (direction === 'higher' && currentGuess > userInput)) {
            Alert.alert("Don't lie", 'You know that this is wrong..', [{
                text: 'Sorry!', style: 'cancel'
            }]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current = currentGuess + 1;
        }
        const nextGuess = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextGuess);
        //setRounds(rounds => rounds + 1);
        setPastGuesses(curPastGuesses => [nextGuess, ...curPastGuesses])
    };


    return(
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Opponent's Guess</Text>
            <NumberDialog>{currentGuess}</NumberDialog>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name='md-remove' size={24} color='white'/>
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
                    <Ionicons name='md-add' size={24} color='white'/>
                </MainButton>
            </Card>
            <View style={styles.list}>
                <ScrollView contentContainerStyle={styles.scrollList}>
                    {pastGuesses.map((guess, index) => renderPastGuess(guess, pastGuesses.length - index))}
                </ScrollView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'

    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    list: {
        flex: 1,
        width: '80%'
    },
    scrollList: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexGrow: 1
    }
});

export default GameScreen;