import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
}

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [roundNums, setRoundNums] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if(!dataLoaded) {
        return <AppLoading startAsync={fetchFonts}
                           onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}/>;
    }

    const configureNewGameHandler = () => {
        setRoundNums(0);
        setUserNumber(null);
    }

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setRoundNums(0);
    }

    const gameOverHandler = (numRounds) => {
        setRoundNums(numRounds)
    }

    let content = <StartGameScreen onStartGame={startGameHandler} />;

    if(userNumber && roundNums <= 0) {
        content = <GameScreen userInput={userNumber} onGameOver={gameOverHandler}/>;
    }
    else if(roundNums > 0) {
        content = <GameOverScreen numRounds={roundNums} userNumber={userNumber} onRestartGame={configureNewGameHandler}/>;
    }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
