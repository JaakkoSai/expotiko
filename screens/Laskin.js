import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";

const Laskin = () => {
  const [ekaNumero, setEkaNumero] = useState("");
  const [tokaNumero, setTokaNumero] = useState("");
  const [result, setResult] = useState([]);

  const handlePlussaus = () => {
    const sum = parseFloat(ekaNumero) + parseFloat(tokaNumero);
    setResult((prevResult) => [
      ...prevResult,
      `Result: ${ekaNumero} + ${tokaNumero} = ${sum}`,
    ]);
    Keyboard.dismiss();
  };

  const handleMiinus = () => {
    const miinus = parseFloat(ekaNumero) - parseFloat(tokaNumero);
    setResult((prevResult) => [
      ...prevResult,
      `Result: ${ekaNumero} - ${tokaNumero} = ${miinus}`,
    ]);
    Keyboard.dismiss();
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={ekaNumero}
          onChangeText={setEkaNumero}
          placeholder="Enter first number"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={tokaNumero}
          onChangeText={setTokaNumero}
          placeholder="Enter second number"
        />
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={handlePlussaus} />
          <Button title="-" onPress={handleMiinus} />
        </View>
        <FlatList
          data={result}
          renderItem={({ item }) => <Text style={styles.result}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
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
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    width: "40%",
  },
  result: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default Laskin;
