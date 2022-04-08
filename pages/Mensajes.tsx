import { Text, StyleSheet, View } from "react-native";

export function Mensajes() {
  return (
    <View style={styles.container}>
      <Text>Mensajes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
