import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const NumeroArvaus = () => {
  const [arvaus, setArvaus] = useState("");
  const [randomNumero, setRandomNumero] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [numArvaukset, setNumArvaukset] = useState(0);

  const checkArvaus = () => {
    const numArvaus = parseInt(arvaus);
    setNumArvaukset(numArvaukset + 1);
    if (numArvaus < randomNumero) {
      Alert.alert("Your guess " + numArvaus + " is too low");
    } else if (numArvaus > randomNumero) {
      Alert.alert("Your guess " + numArvaus + " is too high");
    } else {
      Alert.alert("You guessed the number in " + numArvaukset + " guesses");
      setRandomNumero(Math.floor(Math.random() * 100) + 1);
      setNumArvaukset(0);
    }
    setArvaus("");
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text>Guess a number between 1-100</Text>
        <TextInput
          style={styles.input}
          value={arvaus}
          onChangeText={setArvaus}
          keyboardType="numeric"
          placeholder="Enter your guess"
        />
        <Button title="MAKE GUESS" onPress={checkArvaus} />
      </View>
    </TouchableWithoutFeedback>
  );
};

//Stylesheet tehty käyttäen ChatGPT:ä
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default NumeroArvaus;
