import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Item from "./components/Item";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Feira</Text>
        <View style={styles.items}>
          <Item text={"Primeiro item de compra"}></Item>
          <Item text={"Segundo item de compra"}></Item>
        </View>
      </View>
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
});
