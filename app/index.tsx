import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const App: React.FC = () => {
  const [showDice, setShowDice] = useState<number>(0);

  const diceImages = useMemo(() => ({
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  }), []);

  const rollDice = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setShowDice(randomNumber);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dice Roller App</Text>
      
      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>

      {showDice > 0 && (
        <>
          <Text style={styles.diceText}>You rolled a {showDice}</Text>
          <Image source={diceImages[showDice]} style={styles.diceImage} />
        </>
      )}
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center',
  },
  diceText: {
    fontSize: 28,
    marginTop: 20,
  },
  diceImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default App;