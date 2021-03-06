import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Item from "./components/Item";
export default function App() {
  const [item, setItem] = useState();
  const [listaItems, setListaItems] = useState([{ text: "", quantity: 0 }]);

  const handleAddItem = () => {
    Keyboard.dismiss();
    setListaItems([...listaItems, { text: item, quantity: 0 }]);
    setItem(null);
  };

  const add = (index) => {
    let itemsCopy = [...listaItems];
    itemsCopy[index]++;
    setListaItems(itemsCopy);
    console.log("oi");
  };

  const deleteItem = (index) => {
    let itemsCopy = [...listaItems];
    itemsCopy.splice(index, 1);
    setListaItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Feira</Text>
        <View style={styles.items}>
          <ScrollView>
            {listaItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => deleteItem(index)}>
                  <Item
                    key={index}
                    text={item.text}
                    add={() => deleteItem(index)}
                    quantity={item.quantity}
                  />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding " : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Novo item"}
          value={item}
          onChangeText={(text) => setItem(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
