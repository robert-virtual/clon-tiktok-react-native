import { useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from "react-native";
import { AuthContext } from "../context";
import { StackPropsType, StackType } from "../routes";

export function Perfil({ navigation }: StackPropsType<"Perfil">) {
  const { isAuth } = useContext(AuthContext);
  function navegar(page: keyof StackType) {
    return (e: NativeSyntheticEvent<NativeTouchEvent>) => {
      navigation.navigate(page);
    };
  }
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      {!isAuth ? (
        <Button title="Iniciar Session" onPress={navegar("Login")} />
      ) : null}
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
