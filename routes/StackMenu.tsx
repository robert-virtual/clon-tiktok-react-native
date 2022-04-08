import { RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Login } from "../pages/Login";
import { Registro } from "../pages/Registro";
import { BottomTabs } from "./BottomTabs";

export type StackType = {
  Perfil: undefined;
  Login: undefined;
  BottomTabs: undefined;
  Registro: undefined;
};
export type StackPropsType<T extends keyof StackType> = {
  navigation: NativeStackNavigationProp<StackType, T>;
  route: RouteProp<StackType, T>;
};

const Stack = createNativeStackNavigator<StackType>();

export function StackMenu() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomTabs"
        component={BottomTabs}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
}
