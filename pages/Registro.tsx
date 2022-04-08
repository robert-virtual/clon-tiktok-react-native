import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
export function Registro() {
  const { width } = useWindowDimensions();
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, textAlign: "center" }}>Bienvenido</Text>
      <Image
        source={require("../assets/icon.jpg")}
        style={{
          alignSelf: "center",
          width: width * 0.5,
          height: width * 0.5,
        }}
      />
      <TextInput
        style={{ backgroundColor: "#fcfcfc" }}
        autoComplete={true}
        label={"Correo"}
        keyboardType={"email-address"}
        value={correo}
        onChangeText={setCorreo}
      />
      <View style={{ height: 15 }} />
      <TextInput
        style={{ backgroundColor: "#fcfcfc" }}
        autoComplete={false}
        label={"Clave"}
        value={clave}
        onChangeText={setClave}
        right={() => <TextInput.Icon name={"eye"} />}
      />
      <View style={{ height: 15 }} />
      <Button mode="contained">Entrar</Button>
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
