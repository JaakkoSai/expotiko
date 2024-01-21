import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Alert } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const buttonPressed = () => {
    Alert.alert("You typed " + text);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button onPress={buttonPressed} title="press me" />
    </View>
  );
}