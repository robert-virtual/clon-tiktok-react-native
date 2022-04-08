import { Text, StyleSheet, View } from "react-native";

export function Crear() {
  return (
    <View style={styles.container}>
      <Text>Crear</Text>
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
