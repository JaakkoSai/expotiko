import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";

const Ostoslista = () => {
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);

  const handleAddItem = () => {
    if (item) {
      setLista([...lista, item]);
      setItem("");
    }
  };

  const handleClear = () => {
    setLista([]);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={styles.input}
        placeholder="Lisää tuote"
        value={item}
        onChangeText={setItem}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAddItem} />
        <Button title="Clear" onPress={handleClear} color="red" />
      </View>
      <FlatList
        data={lista}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default Ostoslista;
