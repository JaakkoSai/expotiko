import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const Laskin = () => {
  const [ekaNumero, setEkaNumero] = useState("");
  const [tokaNumero, setTokaNumero] = useState("");
  const [result, setResult] = useState(null);

  const handlePlussaus = () => {
    const sum = parseFloat(ekaNumero) + parseFloat(tokaNumero);
    setResult(sum);
  };
  const handleMiinus = () => {
    const miinus = parseFloat(ekaNumero) - parseFloat(tokaNumero);
    setResult(miinus);
  };

  return (
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
      <Text style={styles.result}>Result: {result}</Text>
    </View>
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
