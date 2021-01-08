import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberDialog from '../components/NumberDialog';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {

    const { onStartGame } = props;

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });


    let confirmedNumber;

    const onEnteredInputHandler = (inputNumber) => {
        setEnteredValue(inputNumber.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }


    if(confirmed) {
        confirmedNumber = <Card style={styles.summaryContainer}>
            <Text>You Selected</Text>
            <NumberDialog>{selectedNumber}</NumberDialog>
            <MainButton onPress={() => onStartGame(selectedNumber)}>
                START GAME
            </MainButton>
        </Card>
    }

    return(
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!!</Text>
            <Card style={styles.inputContainer}>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} value={enteredValue} onChangeText={onEnteredInputHandler} onblurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad'/>
                <View style={styles.buttonContainer}>
                    <View style={{width: buttonWidth}}><Button title='Reset' onPress={resetInputHandler} color={Colors.accent}/></View>
                    <View style={{width: buttonWidth}}><Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary}/></View>
                </View>
            </View>
            </Card>
            {confirmedNumber}
        </View>
        </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    /*button: {
        // width: 100
        width: Dimensions.get('window').width / 4
    },*/
    input: {
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default StartGameScreen;